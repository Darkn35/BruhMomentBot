function sendBruhMoment(message)
{
    minMsg = Math.ceil(0);
    maxMsg = Math.floor(10);

    // randomize message to use
    let messagePing = Math.floor(Math.random() * (maxMsg - minMsg) + minMsg);

    let messages = [
        () => ` it is time to drink water bois.`,
        () => ` :ocean:`,
        () => ` wake up samurai, we have water to gulp down.`,
        () => ` **drink** up gamers.`,
        () => ` **tara suntukan, pero inom ka muna tubig.**`,
        () => ` stay hydrated.`,
        () => ` inom na ng tubig, mga hatdog.`,
        () => ` inom ng tubig kung ayaw niyong makakita ng galit na (ate) ryn.`,
        () => ` ~~drink water for pakistan~~`
    ];
    let messageContent = messages[messagePing]();

    const yesHoneyEmote = message.client.emojis.cache.find(emoji => emoji.name === "yeshoney");

    return message
        .channel
        .send(`${messageContent}`)
        .then(message => {
            message.react(`${yesHoneyEmote}`)
        });
}

module.exports = sendBruhMoment;
