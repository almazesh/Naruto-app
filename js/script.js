const database = [
    {
        id:1,
        name:'Naruto Uzumaki',
        power:'Nine tails',
        village:'Konoha',
        level:'7th Hokage',
        clan:'Uzumaki',
        image:'https://pa1.narvii.com/7422/b16cfd8029b2e6a4ec1764b3644e9396fa8d209dr1-480-270_hq.gif'
    },
    {   
        id:2,
        name:'Sasuke Uchiha',
        power:'Rinnegan + MS',
        village:'Konoha',
        level:'Shadow Hokage',
        clan:'Uchiha',
        image:'https://i.pinimg.com/originals/71/48/c8/7148c82838437c6d8ad478848e68d482.gif '
    },
    {
        id:3,
        name:'Kakashi Hatake',
        power:'Purple Chidori + MS',
        village:'Konoha',
        level:'6th Hokage',
        clan:'White Claw',
        image:'https://thumbs.gfycat.com/TotalOptimalAmericantoad-size_restricted.gif'
    },
    {
        id:4,
        name:'Minato Namikaze',
        power:'Rasengan + Yellow flash Fuuijin',
        village:'Konoha',
        level:'4th Hokage',
        clan:'Namikaze',
        image:'https://thumbs.gfycat.com/SaltyLateBasil-size_restricted.gif'
    },
    {
        id:5,
        name:'Itachi Uchiha',
        power:'MS + Genjutsu',
        village:'Konoha',
        level:'Unlimited',
        clan:'Akatsuki',
        image:'https://media0.giphy.com/media/CchzkJJ6UrQmQ/giphy.gif'
    },
    {
        id:6,
        name:'Madara Uchiha',
        power:'MS + Six Path',
        village:'Konoha',
        level:'Destroyer',
        clan:'Akatsuki',
        image:'https://media1.tenor.com/images/fe60d20d14d53b4e0929b0a0b17c0781/tenor.gif?itemid=17049380'
    },
    {
        id:7,
        name:'Hashirama Senju',
        power:'Wood Style + Regeneration',
        village:'Konoha',
        level:'God of War',
        clan:'Senju',
        image:'https://i.makeagif.com/media/7-28-2016/_eMaFk.gif'
    },
    {
        id:8,
        name:'Pain (Tendo)',
        power:'Six path',
        village:'Hidden Rain',
        level:'God',
        clan:'Akatsuki',
        image:'https://thumbs.gfycat.com/JampackedExcitableHydra-size_restricted.gif'
    },
    {
        id:9,
        name:'Commando A',
        power:'Light shield',
        village:'Hidden Cloud',
        level:'4th Hokage',
        clan:'Lighter',
        image:'https://i.pinimg.com/originals/93/85/90/938590c23c6565490f49b7f4646f7601.gif'
    },
    {
        id:10,
        name:'Gaara',
        power:'Shukakus Land',
        village:'Hidden Land',
        level:'5th Kazekage',
        clan:'Land',
        image:'https://i.gifer.com/C393.gif'
    },
    {
        id:11,
        name:'Kisame Hoshikage',
        power:'White Shark + Water Style',
        village:'Hidden Rain',
        level:'Untail bijuu',
        clan:'Akatsuki',
        image:'https://steamuserimages-a.akamaihd.net/ugc/941711796106927460/EDA08FFEF3AFDFFCD5241FD00926BCB4DAF47C09/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
    },
    {
        id:12,
        name:'Killer B',
        power:'Eight Tail + Katana',
        village:'Hidden Cloud',
        level:'Rap God',
        clan:'Lighter',
        image:'https://qph.fs.quoracdn.net/main-qimg-8380be95c048107f587b8a5ebf70fd9f'
    },    
    
]
window.addEventListener('load',e=>{
    e.preventDefault();
    
    
    if(!localStorage.getItem('ninja')){
        localStorage.setItem('ninja' , JSON.stringify([]))
    }else{
        const card = database.map((item , index) =>{
            return {...item , id:index}
        })

        localStorage.setItem('ninja' , JSON.stringify([...card]))

        const ninja = JSON.parse(localStorage.getItem('ninja'))

        console.log(ninja)
    }
})


const container = document.querySelector('.row');
const searchName = document.querySelector('.searchName')
const searchClan = document.querySelector('.searchClan')


window.addEventListener('load' , Card(JSON.parse(localStorage.getItem('ninja'))))

function Card(arr){
    const card = arr.map(({name , power  , village , clan ,level ,image ,id}) =>{
        return `
            <div class="col-xl-3 mb-4 mt-4">
                <div class="card" style="height:500px;background:rgba(255,255,255,0.7)">
                    <div class="card-header bg-dark text-light text-center">
                        <h2>${name}</h2>
                    </div>
                    <div class="card-image" style="background:url('${image}') center / cover"></div>
                    <div class="card-body">
                        <h5 class="text-danger">Power: ${power}</h5>
                        <h5 class="text-warning">Level: ${level}</h5>
                        <h5 class="text-primary">Clan: ${clan}</h5>
                        <h5 class="text-success">Village: ${village}</h5>
                    </div>
                    <div class="card-footer bg-dark">
                        <button class="btn btn-outline-warning" data-id=${id} onclick="More(${id})">More</button>
                    </div>
                </div>
            </div>
        `
    }).join('')

    container.innerHTML = card;
}


searchName.addEventListener('input' , e=>{
    value = e.target.value.toUpperCase()

    const filtered = database.filter(({name}) => name.toUpperCase().includes(value))

    Card(filtered)
})

searchClan.addEventListener('input' , e=>{
    value = e.target.value.toUpperCase()

    const filtereds = database.filter(({clan}) => clan.toUpperCase().includes(value))

    Card(filtereds)
})



function More(id){
    const ninja = JSON.parse(localStorage.getItem('ninja'))
    localStorage.setItem('more' , JSON.stringify(ninja[id]))
    const newCard = JSON.parse(localStorage.getItem('more'))
    console.log(newCard)
    container.innerHTML = moreCard(newCard)
    

}





function moreCard({name , image , village , clan , power,level }){
        return `
        <div class="d-flex justify-content-center mt-5">
            <div class="w-50 card " style="background:rgba(255,255,255,0.3)">
                <div class="card-header bg-dark text-light text-center">
                    <h1>${name}</h1>
                </div>
                <div class="d-flex">
                        <div class="card-image2" style="background:url('${image}')">

                        </div>
                </div>
            </div>
        </div>
    `
   
}