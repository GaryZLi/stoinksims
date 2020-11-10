const whitelist = {};

const isWhitelisted = ip => {
    return whitelist[ip];

    // return 'VpqHAaPGDwRi54fRvJrPDITDek93';
};

const updateWhitelist = (ip, uid) => {
    whitelist[ip] = uid;
    
//     setTimeout(() => {
//         delete whitelist[ip];
//         console.log(whitelist, 'after deleted');
//     }, 1800000);
};

module.exports = {
    isWhitelisted,
    updateWhitelist,
};