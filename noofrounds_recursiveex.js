var no_persons = 12;
first  = 6 rounds, 6 personds
second =3 rounds, 3 persons
third = 1 rounds, extra 1 person
4th = 1 round 

//for ( n of no_persons ) {
    rounds = 0
    rounds = play(no_persons,rounds)

    if(no_persons%2!==0) {
        rounds = rounds+1
    }
    console.log(rounds);
//}

function play(n,rounds) {

    if(n==1) {
        return rounds;
    } else {
        rounds=rounds+parseInt(n/2);
        n = parseInt(n/2);
        if(n>1) {
            if (n%2!==0 ) {
                rounds  =rounds+1;
            }
        }
        return play(n,rounds);
    }
}
