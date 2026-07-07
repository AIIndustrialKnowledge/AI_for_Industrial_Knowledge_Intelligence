const sendMessage = async (question) => {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({

        reply:
          "🤖 Backend is not connected yet. Gemini response will appear here."

      });

    }, 1500);

  });

};

export default sendMessage;