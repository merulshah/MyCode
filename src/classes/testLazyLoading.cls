public class testLazyLoading {

public boolean tab1{get;set;}
public boolean tab2{get;set;}
public boolean tab3{get;set;}


public testLazyLoading() 
{
    tab1 = true;
    tab2 = false;
    tab3 = false;

}
public void loadtab2()
{
    tab1 = true;
    tab2 = true;
    tab3 = false;
}

public void loadtab3()
{
    tab1 = true;
    tab2 = true;
    tab3 = true;

}

}