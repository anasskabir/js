
// // 1. Then
// getSubscriptionStatus().then(response => console.log(response))

// 2. Async/Await
// async function main() {
    //     const status = (await getSubscriptionStatus())
    //     statusRef.innerHTML = status
    
    // }
    
    // main();
    

/** 1. Creat a function called `Get VIdeo`
 *  2. Accept a parameter called `subscriptionStatus`
 *  3. Return a new Promise inside of the function that:
 *      - if "VIP" resolve ("show video")
 *      - if "FREE" resolve ("show trailer")
 *      - otherwise reject ("no video")
 *  4. console.log the result of getVideo() in main()
 */

const statusRef = document.querySelector('.status')

function getSubscriptionStatus () {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve("VIP");
    }, 2000);
});
}

function getVideo (SubscriptionStatus) {
    return new Promise ((resolve, reject) => {
        if (SubscriptionStatus === 'VIP') {
            resolve("show video")
        }
        else if (SubscriptionStatus === `FREE`) {
            resolve (`Show Trailer`)
        }
        else {
            reject (`no video`)
        }
    })
}

async function main() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status
    console.log(getVideo(status))
}

main();