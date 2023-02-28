
//define elements
const chevron = document.getElementById('chevron');
const learn_more = document.getElementById('learn_more');
const more_text = document.getElementById('more_text');
const bottom_front_page = document.getElementById('bottom_front_page');
const front_page = document.getElementById('front_page');
const leaderboard_box_middle = document.getElementById('leaderboard_box_middle');
const leaderboard_box_right = document.getElementById('leaderboard_box_right');
const leaderboard_box_left = document.getElementById('leaderboard_box_left');
const body = document.getElementById('body');
const join_text = document.getElementById('join_text');
const discord_qr = document.getElementById('discord_qr');
const leaderboard = document.getElementById('leaderboard')

//define global arrays
let bankrolls = []
let names = []
let bankroll_values = []

//Change class of front page text upon hover (only works on desktop, unless mobile clicks)
learn_more.addEventListener('mouseover', (event) => {
    chevron.style.color = 'rgba(0,0,0,0)';
    console.log('hid chevron');
    more_text.className="more_text_show";
    front_page.className="front_page_text";
    console.log(table_to_array('table-body'));
});
bottom_front_page.addEventListener('mouseleave', (event) => {
    chevron.style.color = 'rgba(255,255,255,1)';
    console.log('unhid chevron');
    more_text.className="more_text_hidden";
    front_page.className="front_page";
});

//Get leaderboard data
function table_to_array(table_id) {
    myData = document.getElementById(table_id).rows
    my_liste = []
    for (var i = 0; i < myData.length; i++) {
            el = myData[i].children
            my_el = []
            for (var j = 0; j < el.length; j++) {
                    my_el.push(el[j].innerText);
            }
            my_liste.push(my_el)

    }
    return my_liste
}


// identify an element to observe
elementToObserve = window.document.getElementById('table-body');
// create a new instance of 'MutationObserver' named 'observer', 
// passing it a callback function

var data;
var run_leaderboard = false;
observer = new MutationObserver(function(mutationsList, observer) {
    data = table_to_array('table-body');
    run_leaderboard = true;
    for (i = 0; i < data.length; i++) {
        var div = document.createElement("p1");
        var div2 = document.createElement("p1");
        var div3 = document.createElement("p1");
        if (i % 2 == 1) {
            div.className = "leaderboard_blue"
            div2.className = "leaderboard_blue"
            div3.className = "leaderboard_blue"
        } else {
            div.className = "leaderboard_orange"
            div2.className = "leaderboard_orange"
            div3.className = "leaderboard_orange"
        }
        div3.innerHTML = i + 1;
        leaderboard_box_middle.appendChild(div);
        leaderboard_box_right.appendChild(div2);
        leaderboard_box_left.appendChild(div3)
        names[i] = div;
        bankrolls[i] = div2;
        bankroll_values[i] = 0;
    }
});

// call 'observe' on that MutationObserver instance, 
// passing it the element to observe, and the options object
observer.observe(elementToObserve, {characterData: false, childList: true, attributes: false});

//Randomize names for effect
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


var scroll_limit = 0;
if (window.innerWidth > 1000) {
    scroll_limit = 250;
} 


function increment () {
    //only run leaderboard scroll once values have been obtained by API
    if (run_leaderboard) {
        if (window.scrollY > scroll_limit & window.scrollY < window.innerHeight * 2) {
            for(let bankroll = data.length - 1; bankroll >= 0; bankroll --) {
                if (bankrolls[bankroll].innerHTML < parseInt(data[bankroll][2])) {
                    bankrolls[bankroll].innerHTML = bankroll_values[bankroll]
                    if (parseInt(data[bankroll][2]) - bankrolls[bankroll].innerHTML > 100) {
                        bankroll_values[bankroll] += Math.round((data[bankroll][2] - bankroll_values[bankroll]) / ((data.length - bankroll) * 1.5))
                    } else {
                        bankroll_values[bankroll] += 1
                    }
                    names[bankroll].innerHTML = makeid(data[bankroll][1].length);
                } else {
                    names[bankroll].innerHTML = data[bankroll][1];
                }
                
            }
            leaderboard.className = 'leaderboard_show';
            join_text.className = 'join_show';
            discord_qr.className = 'join_show';
        
        } else {
            for(let bankroll = data.length - 1; bankroll >= 0; bankroll --) {
                bankroll_values[bankroll] = 0;
                bankrolls[bankroll].innerHTML = "0";
                names[bankroll].innerHTML = makeid(data[bankroll][1].length);
            }
            leaderboard.className = 'leaderboard_hidden';
            join_text.className = 'join_hidden';
            discord_qr.className = 'join_hidden';
        }
    } 
}


setInterval('increment()', 10);


