var button = document.getElementById("register_button").addEventListener('click',function()
{
    document.getElementById("alert_register").style.display = 'block';

    setTimeout(function()
        {
            document.getElementById("alert_register").style.display = 'none';
        }
    ,3000)
})