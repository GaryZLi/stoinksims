const whitelist = {};

export const isWhitelisted = ip => {
    console.log(whitelist, ip, 'iswhitelidtsed');
    // return whitelist[ip];

    // return undefined;
    return 'fhDKJ48xrvO4iVuZWxc1EAPvABv2';
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
