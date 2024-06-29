
const BattleBoard = {
    Rules: {
        Bomber: {
            Prizes: ['FreeBomb', 'Diamonds', '1(FS)', 'FreeBombx2', '2(FS)'],
            MinMinorWins: 3,
            MaxMinorWins: 5,
            MajorWins: 1,
        }
    },
    GameSheets: {
        BomberField: {},
        BomberFieldOLD: {},

    },

    logs: { BomberField: [], BomberFieldWinLogs: [], },
    methods: {
        addBomberFieldLogs: function (l) { BattleBoard.logs.BomberField.push(l); },
        PushBomberField: function (main, id, mnWins, mjWins, fbWins, hits) {
            let x = { 'inPlay': main, 'id': id, 'Mnr_Wins': mnWins, 'Mjr_Wins': mjWins, 'freeBombs': fbWins, 'hits': hits };
            if (main === 0) { return x = BattleBoard.GameSheets.BomberField = x; }
            BattleBoard.GameSheets.BomberField.push(x);
        },
        TestBomberFieldBoard: function () {
            let x = document.querySelectorAll('button[id*="BS_Square_"]');
            for (i in x) {
                if (x[i] && x[i].id) {
                    let ids = x[i].id.slice(-2); //console.log(`id = ${ids}`)
                    let BGB = BattleBoard.GameSheets.BomberField;
                    if (BGB.hits.includes(ids)) {
                        x[i].disabled = 'disabled'; console.log(`Hit : ${ids}`);
                        if (BGB.Mjr_Wins.includes(ids)) { x[i].className = "MJR"; }
                        else if (BGB.Mnr_Wins.includes(ids)) { x[i].className = "MnR"; }
                        else if (BGB.freeBombs.includes(ids)) { x[i].className = "FBS"; }
                        else { x[i].className = "HIT"; }
                    }
                    else { } // UNUSED -- LOAD DEFAULT
                }
            }
        }
    }
}

