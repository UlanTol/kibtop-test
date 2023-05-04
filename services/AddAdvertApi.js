import {createHeaders, instance} from "./Instance"
import FormDataCreator from "./tools/FormDataCreator"
import {serializeAdvertDatails} from "./tools/serializers/AdvertsSerializers"
import {serializeCreateAdvertData} from "./tools/serializers/CreateAdvertSerializers"

export const AddAdvertApi = {
    async createAdvert(data, category, lang) {

        const body = serializeCreateAdvertData(data, category, lang)

        return await instance.post(`${category}/create/`, body, {
            headers: await createHeaders()
        }).then(async (res) => {

            const {advertId} = serializeAdvertDatails(res.data, lang, category)
            const {photos} = data

            for await (const photo of photos) {
                const formData = FormDataCreator({
                    [`${category}_full_upload`]: advertId,
                    uploads: photo
                })

                await instance.post(`${category}/full_uploads/`, formData, {
                    headers: await createHeaders()
                })
            }
            console.log(res);
            console.log(res.data);
            console.log(res.data.url);
            if (res.data.url != null) {
                console.log('Why am i here?');
                window.location.replace(res.data.url);
            }

            return {id: advertId, category}
        }).then(advert => advert)
    }
}