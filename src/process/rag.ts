import client from "./api"

const uploadFile = async (formData: FormData) => {
    const { data } = await client.post('/upload', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    return { data }
}

export { uploadFile }
