import API from "./api";

const sendMessage = async (question) => {

    try {

        const response = await API.post("/chat", {
            question: question
        });

        return {
            reply: response.data.answer
        };

    } catch (error) {

        console.error(error);

        return {
            reply: "❌ Unable to connect to backend."
        };

    }

};

export default sendMessage;