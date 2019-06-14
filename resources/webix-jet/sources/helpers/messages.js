class Messages {
    static showMessage(message) {
        webix.message({ text: message })
    }

    static getErrors(error) {
        for (var e in error) {
            webix.message({
                text: error[e][0],
                type: "error",
            });
        }
    }
}

export default Messages;
