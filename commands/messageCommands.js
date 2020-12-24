const sendBruhMoment = require('./bruhMessage');

// command functions
function ping(message)
{
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Bruh! This message had a latency of ${timeTaken}ms.`);
}

function moment(message)
{
    sendBruhMoment(message);
}

function help(message)
{
    message.channel.send(
        `bruh!ping - gets your ping.\n`
        + `bruh!moment - sends a bruh moment.\n`
    );
}

exports.ping = ping;
exports.moment = moment;
exports.help = help;
