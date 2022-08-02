let pin = 2024;
let balance = 10000;

let Gpin = parseInt(prompt("[-EVCPLUS-]\nFaldan Geli pin-kaaga (Enter thePIN)"))
if(Gpin==pin){
    var service = parseInt(prompt("Fadlan Dooro\n 1. Itus Haraagaga.\n 2.Kaarka hadalka.\n 3.Bixi bill. \n 4.Uwareeji EVCPLUS.\n 5.Warbixin Kooban.\n 6.Salaam Bank.\n 7.Maareyta.\n 8.TAAJ\n 0.Kabax"))
    if(service == 1){
        document.write("[-EVCPlus-] Haraagaagu waa $"+balance+".")
    }
    else if(service == 2){
        let k_hadalka = prompt("Kaarka hadalka\n 1.Ku shubo Airtime\n 2.Ugu Shub Airtime\n 3.MIFI Packages\n")
        if(k_hadalka == 1){
            let GLC = prompt("Fadlan Geli Lacagta")
            newvalue1 = balance - GLC
            var hubin = prompt("Ma hubtaa inaad $"+GLC + " ugu shibitid undefined?\n 1.Haa\n 2.Maya")
                if(hubin == 1 && GLC <=balance){
                    if(GLC <=balance){
                        document.write("[-ECVPlus-] Waxaad $"+GLC +" ugu shubtay undefined haraagagu waa $"+newvalue1+".")
                }else{
                    alert("Macsalaama")
                }
            }
            else{
                document.write("[-ECVPlus-] Haraaga Xisaabtada Kuma filno")
            }
        }else if(k_hadalka == 2){
            let mob = Number(prompt("Fadlan Geli Lamberka"))
            if(mob <= 619999999 && mob >=610000000){
                let lcg = prompt("Fadla Geli Lacagta")
                newValue2 = balance - lcg
                let hbn = prompt("Mahubtaa Inaad $"+lcg+ " aad udieyso "+mob+ "?\n 1.Haa\n 2.Maya")
                if(hbn == 1){
                    if(lcg <= balance){
                        document.write("[-ECVPlus-] Waxaad $"+lcg+" ugu shubtay "+mob +" haraagagu waa $"+newValue2+".")
                    }else{
                        alert("[-ECVPlus-] Haraaga Xisaabtada Kuma filno")
                    }
                }else{
                    alert("Macsalaama")
                }
                
            }else{
                alert("Numberka Aad Gelisay ma ahan mid jira.")
            }
        }else if(k_hadalka == 3){
            var data = prompt("EVCPlus\n 1. Ku Shubo Data-da MIFI")
            if(data == 1){
                let check_data = prompt("--Internet Bundle Recharge--\n 1.Maalinle(Daily)\n 2.Isbuucle(Weekly)\n 3.Bille(Mounthly)")
                if(check_data == 1){
                    var dooro_bundle = prompt("Fadlan dooro bundle ka\n 1.$1 =2 GB\n 2.$2 = 5 GB")
                    if(dooro_bundle == 1){
                        var A = prompt("Fadlan Gali MIFI user")
                        if(A== ""){
                            alert("Halkaan howl baa ka socoto. Mahadsanid")
                        }else{
                            alert("Macasalaama")
                        }
                    }else if(dooro_bundle == 2){
                        var B = prompt("Fadlan Gali MIFI user")
                        if(B == " "){
                            alert("Macaamil Halkaan howl Baa Kasocota. Mahadsanid")
                        }else{
                            alert("Macasalaama")
                        }
                    }else{
                        alert("Macsalaama")
                    }
                }else if(check_data == 2){
                    var dooro_bundle2 = prompt("Fadlan Dooro bundle ka\n 1.$5 = 10 GB\n 2.$10 = GB")
                    if(dooro_bundle2 == 1){
                        var C =prompt("Fadlan Geli MIFI user")
                        if(C == ''){
                            alert("Macaamil Halkaan howl Baa Kasocota. Mahadsanid")
                        }else{
                            alert("Macsalaama")
                        }
                    }else if(dooro_bundle2 == 2){
                        var D =prompt("Fadlan Geli MIFI user")
                        if(D == ''){
                            alert("Macaamil Halkaan howl Baa Kasocota. Mahadsanid")
                        }else{
                            alert("Macsalaama")
                        }
                    }
                }else if(check_data == 3){
                        var dooro_bundle3 = prompt("fadlan dooro bundle ka\n 1.$20 = 40 GB\n 2.$40 = 85 GB\n 3.$60 = 150 GB ")
                        if(dooro_bundle3 == 1){
                            var E = prompt("Fadlan Geli MITI user")
                            if(E==""){
                                alert("Macamiil Halkaan howl baa kasocto. Mahadsanid")
                            }else{
                                alert("Macsalaama")
                            }
                        }else if(dooro_bundle3 == 2){
                            var F = prompt("Fadlan Geli MITI user")
                            if(F==""){
                                alert("Macamiil Halkaan Howl baa kasocta")
                            }else{
                                alert("Macsalaama")
                            }

                        }else if(dooro_bundle3 == 3){
                            var G = prompt("Fadlan Geli MITI user")
                            if(G == ""){
                                alert("Macaamil Halkaan Howl ayaa kasocoto. Mahdsanid")
                            }else{
                                alert("Macsalaama")
                            }
                }       

                }
                else{
                    alert("Fadlan Dooro number sax ah")
                }
            }else{
                alert("Fadlan Dooro number sax ah")
            }
        }

        else{
            alert("Fadlan Dooro number sax ah")
        }
        
    }

    else if (service == 3){
        var B_bixi = prompt("Bixi Biil\n 1.Post Paid\n 2.Ku Iibso")
        if(B_bixi == 1){
            var postPaid = prompt("Post Paid\n 1. Ogaaw Biilka\n 2.Bixi Biil\n 3.Kabixi Biil")
            if(postPaid == 1){
                alert("error occured, please try again leter")
            }else if(postPaid == 2){
                alert("error occured, please try again leter")
            }else if(postPaid == 3){
                alert("error occured, please try again leter")
            }
        }
        else if(B_bixi == 2){
            var Ganacsi = prompt("Fadlan Geli aqoonsiga ganacsiga")
            if(Ganacsi == ''){
                alert("Invalid inpit format(data-Type)")
            }else{
                alert("Invalid input, please try again leter")
            }
        }
        
        else{
            alert("Fadlan dooro Number sax ah")
        }
    }
    else if(service == 4){
        var mobile = Number(prompt("Fadlan Geli Mobile-ka"))
        if(mobile >=610000000 && mobile <=619999999){
            var lct = Number(prompt("Fadlan Geli lacagta"))
            var newValue3 = balance - lct
            var tjbin = prompt("Ma hubtaa inaad $"+lct+ " u wareejisid +252"+mobile+"? \n 1.Haa\n 2.Maya")
            if(tjbin == 1){
                if(lct <= balance){
                    document.write("[-ECVPlus-] $"+lct+" ayaad uwareejisay 0"+mobile +" Haraagagu waa $"+newValue3+".")
                }else{
                    document.write("[-ECVPlus-] Haraaga Xisaabtada Kuma filno")
                }
            }else{
                alert("Macsalaama")
            }
        }else{
            alert("Numberkan ma diiwaansan, si aad isku diiwan geliso garaac *770# ama la xiriir 141/101 ama whatsapp +2522615555555")
        }
    }
    
    else if(service == 5){
        var wxk = prompt("Warbixin Kooban\n 1.Last Action\n 2.Wareejitii u dambeysay\n 3. Iibsashadii u dambeysay\n 4. Last 3 Action\n 5.Email Me My ACtivity")
        if(wxk == 1){
            alert("No Transactions to display!")
        }else if(wxk ==2){
            alert("No Transactions to display!")
        }else if(wxk == 3){
            alert("No Transactions to display!")
        }else if(wxk == 4){
            alert("No Transactions to display!")
        }else if(wxk == 5){
            alert("No Transactions to display!")
        }
    }
    
    else if(service == 6){
        var SBank = prompt("Salaam Bank\n 1.Ka wareeji EVCPlus")
        if(SBank == 1){
            var xsBank = prompt("Fadlan dooro xisaabta Banigiga\n 1.SALAAM SOMALI BANK\n 2.Salaam Sch")
            if(xsBank ==1){
                var gAcc = prompt("Fadlan Geli Accoun-kaaga")
                if(gAcc >=000000000 && gAcc <=999999999){
                    var Gmalumdka =prompt("Fadlan Geli macluumaadka")
                    var Glct = Number(prompt("fadlan Geli Lacagta"))
                    var newValue4 = balance - Glct
                    var hubintaBank = prompt("Ma hubtaa inaad $"+Glct+ " aad Ku shubto Accounka "+gAcc+ " una dirto "+Gmalumdka+ "? \n 1.Haa\n 2.Maya")
                    if(hubintaBank == 1){
                        if(Glct <= balance){
                            document.write("[-Account Transfer-] $"+Glct+" ayaad ugu shubtay Accoun numerka "+gAcc+" Haraagagu waa $",balance-Glct +".")
                        }else{
                            document.write("[-ECVPlus-] Haraaga Xisaabtada Kuma filno")
                        }
                    }else{
                        alert("Macsalaama")
                    }
                }else{
                    document.write("[-EVCPLUS-] <br /> Numberka Accoun ka aad gelisay Waa Khalad")
                }
            }
            else if(xsBank == 2){
                
                var gAcc = prompt("Fadlan Geli Accoun-kaaga")
                if(gAcc >=000000000 && gAcc <=999999999){
                    var Gmalumdka =prompt("Fadlan Geli macluumaadka")
                    var Glct = Number(prompt("fadlan Geli Lacagta"))
                    var newValue4 = balance - Glct
                    var hubintaBank = prompt("Ma hubtaa inaad $"+Glct+ " aad Ku shubto Accounka "+gAcc+ " una dirto "+Gmalumdka+ "? \n 1.Haa\n 2.Maya")
                    if(hubintaBank == 1){
                        if(Glct <= balance){
                            document.write("[-Account Transfer-] $"+Glct+" ayaad ugu shubtay Accoun numerka "+gAcc+" Haraagagu waa $",balance-Glct +".")
                        }else{
                            document.write("[-ECVPlus-] Haraaga Xisaabtada Kuma filno")
                        }
                    }else{
                        alert("Macsalaama")
                    }
                }else{
                    document.write("[-EVCPLUS-] <br /> Numberka Accoun ka aad gelisay Waa Khalad")
                }
            }
        }else{
            alert("Fadlan dooro number sax ah")
        }
    }
    else if(service == 7){
        var maareynta = prompt("Maareynat\n 1.Bedel lambaeka Sirta ah\n 2.Bedel Luqadda\n 3.Wargelin Mobile Lumay\n 4.Lacag Xirasho\n 5.U celi lacag qaldantay\n 6.Enable MobileBanking")
        if(maareynta == 1){
            var pin_cusub = Number(prompt("Fadlan Geli PIN-kaaga Cusub"))

            
            if(pin_cusub >= 0000 && pin_cusub <=9999){
                var hpinkaCusub = Number(prompt("Hubi Pinkaaga Cusub"))
                if(hpinkaCusub == pin_cusub){
                    document.write("[-EVCPlus-] Waad Ku guuleysatay Inaad badasho pinkaaga")
                }else{
                    alert("Laguma Guuleysan Howshan.")
                }
            }else{
                alert("Invalid input, please try again \n Geli pin-kaaga Cusub")
            }
        }else if(maareynta == 2){
            var dooro = prompt("Fadlan Dooro\n 1. English\n 2. Somali")
            if(dooro == 1){
                document.write("[-ECVPlus-] you have Successfully Changed your Language.")

            }else if(dooro == 2){
                document.write("[-ECVPlus-] Waad ku guuleysatay inaad badesho luqadda.")
            }else{
                alert("fodlan dooro number sax ah")
            }
        }
        else if(maareynta == 3){
            var lam = Number(prompt("Fadlan Geli Numberka Lumay"))
            var lamPinkisa = 2021;
            if(lam >=610000000 && lam<=619999999){
                var lamPinkiisa = Number(prompt("Fadlan Geli Pinka Lambarka Lumay"))
                if(lamPinkiisa == lamPinkisa){
                    document.write("[-EVCPlus-] Waxaad lumid u diiwan gelisay mobile-ka +252"+lam)
                }else{
                    alert("Waan Ka xunhay Laguma Guuleysan Howshan")
                }
            }else{
                alert("Waan Kaxunnahy Lambarkan looma diiwan gelin karo inuu lumay")
            }
        }
        else if(maareynta == 4){
            document.write("Fadlan Booqo xarunta kuugu dhaw si aad uxirato. Mahadsanid")
        }else if(maareynta== 5){
            document.write("Fadlan booqo xarunta kuug dhow si lacagtada lagu soo celiyo")
        }else if(maareynta == 6){
            var nisdiiwan = Number(prompt("Fadlan Geli Number ka is diiwaan Gelinta"))
            if(nisdiiwan >=610000000 && nisdiiwan <=619999999){
                document.write("[-EVCPlus-] Waxaad iska diiwan gelisay Enable MobileBanking. Mahadsanid ")
            }else{
                alert("Numberka aad Iska diiwan Gelisay Ma ahan Mid jira")
            }
        }
        
        else{
            alert("fadlan dooro number sax ah")
        }
    }
    else if(service == 8){
        var TAAJ = prompt("TAAJ\n 1. Dibbada\n 2.Ogaaw Khaidmada\n 3.Macluumaadka Xawaalada")
        if(TAAJ == 1){
            let TQ = Number(prompt("Fadlan Geli Telophone-ka qaataha"))
            let MQ = prompt("Fadlan Geli Magaca Qaataha")
            let Magalada = prompt("Fdalan Geli Magaalada UU joogo")
            let many = prompt("Fadlan Geli Lacagta")
            let macluumaad = prompt("Fadlan Geli Macluumaad")
            var testing = prompt("Khidmadda Ma xisaabtaada ayaa laga jarayaa?\n 1.Haa\n 2.Maya")
            if(testing == 1){
                var testing2 =prompt("Ma hubtaa inaad $"+many+ " U dirtid +252"+TQ+ "?\n 1.Haa\n 2.Maya")
                if(testing2 == 1){
                    if(many <= balance){
                        document.write("[-TAAJ-]\n Waxaad $"+many+ " U dirtay "+ MQ + " Oo jooga magaaladda "+Magalada+ " oo wata +52"+TQ+ "\n Haraagagu Waa $",balance - many)
                    }else{
                        document.write("[-EVCPlus-] Haraaga Xisaabtaadu kuma Falina")
                    }
                }else{
                    alert("Macsalaama")
                }
            }else{
                alert("Macsalaama")
            }
        }
        else if(TAAJ == 2){
            alert("Sorry! Howl baa Ka socoto")
        }else if(TAAJ == 3){
            alert("Sorry! this in not woring")
        }
        else{
            alert("Fadlan dooro number sax ah")
        }
    }

    else if(service == 0){
        alert("Macsalaaaaaaaaama")
    }
    else{
        document.write("[-EVCPLUS-] <br /> Fadlan Dooro number sax ah")
    }
}
else{
    alert("[-EVCPUS-] Numberka Sirta ah waa khalad")
}