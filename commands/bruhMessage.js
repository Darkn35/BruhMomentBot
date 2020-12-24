function sendBruhMoment(message)
{
    minMsg = Math.ceil(0);
    maxMsg = Math.floor(10);

    // randomize message to use
    let messagePing = Math.floor(Math.random() * (maxMsg - minMsg) + minMsg);

    let messages = [
        () =>  `https://media.discordapp.net/attachments/706378767697707018/791514404423467069/unknown.png`,
        () =>  `"Aren't Komodo Dragons actually dragons???"\n`
                + `-MJ 2020`,
        () =>  `https://media.discordapp.net/attachments/706378767697707018/791508625020420106/unknown.png`,
        () =>  `https://media.discordapp.net/attachments/706378767697707018/791508773335334942/unknown.png`,
        () =>  `id rather fuck food\n `
                + `-MJ 2020`,
        () =>  `hmmm, if mj backwards is bruh, then are all bruh moments mj moments?\n `
                + `-Ron 2020`,
        () =>  `i made ubos ubos the milk e kahapon\n `
                + `-MJ 2020`,
        () =>  `/tites\n `
                + `-Ryn 2020`,
        () =>  `.m,.,;ll;loi987878uyfsddseeeeeeeeeeeeeeex  nb   ,m;jkp[kdfghjsdfhjkkssdfghjkxvvcxcvbnmfdsd\n`
                + `-yoon 2020`,
        () =>  `Jesus will remember this\n `
                + `-MJ 2020`,
        () =>  `salamat RYAN\n `
                + `-Jeco 2020`,
        () =>  `im suuch a whore for water\n `
                + `-Ryn 2020`,
        () =>  `*huminga* puuuuuuuu TANGINA MOOOOOOOOOO\n `
                + `-MJ 2020`,
        () =>  `rtx gs50 send to 8080\n `
                + `-Ryn 2020`,
        () =>  `wait di ako makapagisip im taking a shit\n `
                + `-Yoon 2020`,
        () =>  `"gameplan is to sleep after saying present"\n `
                + `-ryn 2020`,
        () =>  `https://media.discordapp.net/attachments/706378767697707018/791511836021227570/EfSmHOhUYAAT5So.png`,
        () =>  `did u know that turtles can breathe thru their ass\n `
                + `-Jeco 2020`,
        () =>  `i wish i could breathe through my ass\n `
                + `-MJ 2020`
    ];
    let messageContent = messages[messagePing]();

    const scoutLaugh = message.guild.emojis.cache.find(emoji => emoji.name === 'scoutLaugh');
    const yesHoney = message.guild.emojis.cache.find(emoji => emoji.name === 'yeshoney');

    return message
            .channel
            .send(`${messageContent}`)
            .then(message => {
                message.react(`${scoutLaugh}`)
                .then(() => message.react(`${yesHoney}`))
            });

    // return message
    //         .channel
    //         .send(`${messageContent}`)
    //         .then(message => {
    //             message.react(`😔`)
    //         });
}

module.exports = sendBruhMoment;
