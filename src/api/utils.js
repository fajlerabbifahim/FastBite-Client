import axios from "axios";

export const imageUpload = async ImageData => {
    const formData = new FormData();
    formData.append('image', ImageData)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`,
        formData
    )

    return data.data.display_url;
}


export const saveUser = async user => {
    const userInfo = {
        name: user?.displayName,
        image: user?.photoURL,
        email: user?.email,
    }
    await axios.post(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, userInfo)
}