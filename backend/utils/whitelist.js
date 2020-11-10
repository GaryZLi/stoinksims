const whitelist = {};

export const isWhitelisted = ip => {
    return whitelist[ip];

    // return 'VpqHAaPGDwRi54fRvJrPDITDek93';
};

export const updateWhitelist = (ip, uid) => {
    whitelist[ip] = uid;
    
//     setTimeout(() => {
//         delete whitelist[ip];
//         console.log(whitelist, 'after deleted');
//     }, 1800000);
};
