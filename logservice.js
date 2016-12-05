/**
 * Created by SC_Dev on 28/11/2016.
 */

let setColor = (didsucceedLogin) => {
    if (didsucceedLogin == true)
    {
        document.getElementById("verify").innerHTML = "Welcom";
    }
    else
    {
        document.getElementById("verify").innerHTML = "Go Away";
    }
}

let LoginService = {
    user: 'Tidhar',
    password: '123456',
    login: function (fn)
    {
    let typeuser = prompt('Enter User Name');
    let typepassword =  prompt('Enter User Password');
    let didsucceed;
    if (typeuser === this.user && typepassword===this.password)
    {
        didsucceed = true;
    }
    else
    {
        didsucceed = false;
    }
        fn(didsucceed);
    }
}
LoginService.login(setColor)