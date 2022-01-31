function OnClick()
{
    let textarea = document.querySelector('.msg-send');
    let text = textarea.value;
    if (textarea.value.length <= 0)
    {
        return;
    }
    textarea.value ='';
    AddMessage(text);
}

function AddMessage(text)
{
    const chatBox = document.querySelector('.msg-inbox');
    const msg = document.querySelector('#msg-template').content.cloneNode(true);

    console.log(msg);
    msg.querySelector('.outgoing-chats-msg').innerText = text;
    chatBox.append(msg);
}