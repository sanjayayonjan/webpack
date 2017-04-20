// module.exports = function (message) {
//     alert('message');
// }

// export default function (message) {
//     alert('message');
// }

function notify (message) {
    alert('message');
};

function log (message) {
    console.log('message');
};

export default {
    notify: notify,
    log: log
};

