dineroCofla = prompt(" cuanto dinero tienes cofla");
dineroRoberto = prompt(" cuanto dinero tienes Roberto ");
dineroPedro = prompt(" cuanto dinero tienes Pedro");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);

if(dineroCofla >= 0.6 && dineroCofla < 1){
    alert("comprate el helado de agua");
    alert("y te sobran" + (dineroCofla - 0.6));
}

else if(dineroCofla >= 1 && dineroCofla < 1.6)
{
    alert("cofla, comprate el helado de crema ")
    alert("y te sobran" + (dineroCofla - 1));
}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7)
{
    alert("cofla, comprate el helado de choco ");
    alert("y te sobran" + (dineroCofla - 1.6));
    
}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8)
{
    alert("cofla, comprate el helado de cremilla");
    alert("y te sobran" + (dineroCofla - 1.7));
}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9)
{
    alert("cofla, comprate el helado chocolate ");
    alert("y te sobran" + (dineroCofla - 1.8));
}
else if(dineroCofla >= 2.9)
{
    alert(" helado mas confites");
    alert("y te sobran" + (dineroCofla - 2.9));
} else {
    alert("no te alcanza u.u");
}



if(dineroRoberto>= 0.6 && dineroRoberto < 1){
    alert("roberto, comprate el helado de agua");
    alert("y te sobran" + (dinerRoberto - 0.6));
}

else if(dineroRoberto >= 1 && dineroRoberto < 1.6)
{
    alert("roberto, comprate el helado de crema ");
}
else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7)
{
    alert("roberto, comprate el helado de choco ");
}
else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8)
{
    alert("roberto, comprate el helado de cremilla");
}
else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9)
{
    alert("roberto, comprate el helado chocolate ");
}
else if(dineroRoberto >= 2.9)
{
    alert(" helado mas confites");
    alert("y te sobran" + (dineroRoberto - 2.9));
} else {
    alert("no te alcanza u.u");
}

if(dineroPedro >= 0.6 && dineroPedro < 1){
    alert("comprate el helado de agua");

}

else if(dineroPedro >= 1 && dineroPedro < 1.6)
{
    alert("Pedro, comprate el helado de crema ");
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7)
{
    alert("Pedro, comprate el helado de choco ");
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8)
{
    alert("Pedro, comprate el helado de cremilla");
}
else if(dineroPedro >= 1.8 && dineroPedro < 2.9)
{
    alert("Pedro, comprate el helado chocolate ");
}
else if(dineroPedro >= 2.9)
{
    alert(" helado mas confites");
} else {
    alert("no te alcanza u.u");
}