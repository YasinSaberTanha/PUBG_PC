
export default function CreateFormData(values) {
    const formData = new FormData();

    Object.entries(values).forEach((items) => {
        formData.append(items[0], items[1]);
    })

    return formData;
}


