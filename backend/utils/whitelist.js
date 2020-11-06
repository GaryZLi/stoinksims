const whitelist = {};

export const isWhitelisted = ip => {
    // return whitelist[ip];

    // return undefined;
    return 'VpqHAaPGDwRi54fRvJrPDITDek93';
};

export const updateWhitelist = (ip, uid) => {
    whitelist[ip] = uid;
    
console.log(whitelist, 'updated');

//     setTimeout(() => {
//         delete whitelist[ip];
//         console.log(whitelist, 'after deleted');
//     }, 1800000);


    // 1800000
};
