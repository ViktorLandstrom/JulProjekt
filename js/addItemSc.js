var c = 0,
    b = 0,
    euqipxc = 163,
    equipyc = 179 + 109,
    removexc = 163 + 50,
    removeyc = 170 + 109,
    bW = 50,
    bH = 22,

function addItemToInv(invOn){
    for(var c = 0; c < inventory.length; c++){
        if (inventory[b] == items[c]){
            if (items[c] == items[0]){
                if(invOn){
                    swordImg = document.getElementById("SwordofChristmas");
                    equipImg = document.getElementById("equipButton");
                    removeImg = document.getElementById("removeButton");
                    createImage(swordImg, 163, 170, 100, 100);
                    createImage(equipImg, euqipxc, equipyc, bW, bH);
                    createImage(removeImg, removexc, removeyc, bW, bH);
                } else if (!invOn){
                    //Do nothing
                }
            } else if (items[c] == items[1]){
                if(invOn){
                    console.log("Potion showing in inventory");
                } else if (!invOn){
                    //Do nothing
                }
            }
        } if (c > items.length){
            c = 0;
            b += 1;
            if (b > inventoryMax){
                b = 0;
            }
        }
    }
}