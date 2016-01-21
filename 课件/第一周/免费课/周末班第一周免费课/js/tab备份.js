//��������:
//表格排序)Ĭ�ϵ�һ��li�͵�һ��div��ѡ�� class='select'
//2)���ҵ��ĳһ��li��ʱ��,���������е�li��div��û��ѡ�е���ʽ;Ȼ���������ǵ�ǰ��������li��div��ѡ�е���ʽ;

//表格排序����Ҫ������ЩԪ�ؾ��Ȱ����Ƕ���ȡ��:
//->#tab�µ�����li������div
var oTab = document.getElementById("tab");
var oLis = oTab.getElementsByTagName("li");
var oDivs = oTab.getElementsByTagName("div");

//2����дһ������ʵ�����ǵ�ѡ�����
function tabChange(nIndex) {
    //表格排序)���ܵ��������һ��,���������е�li��div��û��ѡ�е���ʽ
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].className = null;
        oDivs[i].className = null;
    }
    //2)�õ�ǰ��������li�Ͷ�Ӧ��div��ѡ�е���ʽ
    //�ƶ�������ʱ�򲢲�֪����ǰ���������һ��,��ô���Ƕ���һ���β�,�洢��ǰ������li������->nIndex:���ݽ����ĵ�ǰ��������li������
    oLis[nIndex].className = "select";
    oDivs[nIndex].className = "select";
}

//3�����û����ÿһ��li��ʱ��,����ִ��tabChange����
//表格排序)һ�����İ󶨵���¼�
//oLis[0].onclick = function () {
//    tabChange(0);
//};
//oLis[表格排序].onclick = function () {
//    tabChange(表格排序);
//};
//oLis[2].onclick = function () {
//    tabChange(2);
//};

//2)ѭ����ÿһ��li�󶨵���¼�
//for (var i = 0; i < oLis.length; i++) {
//    oLis[i].onclick = function () {
//        alert(i);
//        //tabChange(i);
//    };
//}
//Uncaught TypeError: Cannot set property 'className' of undefined ��������className�������->�󲿷�����¶��ǲ�������Ԫ���Ǵ����
//ͨ���������Ƿ��ֵ����һ��li���Ǵ��ݸ�tabChange�����������������3

//��ϸ�ķ�������:
//i=0 ��һ��ѭ�� ����һ��li�󶨵���¼�
//oLis[0].onclick = function () {
//    alert(i);
//};
////���Ǹ���һ��li��onclick��Ϊ����һ������(��ʱֻ�ǰѷ�������Ĳ��ָ�ֵ��onclick)��ֻ�е������һ��li��ʱ��Ż�ִ��
////��Ϊ�󶨵�ʱ��,����û��ִ��,�����д洢���Ǵ����ַ��� ��alert(i)��;�����i���Ǳ���,ֻ��һ��û���κ�������ַ�����
//
//i=表格排序 �ڶ���ѭ�� ���ڶ���li�󶨵���¼�
//oLis[表格排序].onclick=function(){
//    alert(i);
//};
//
//i=2 ������ѭ�� ��������li�󶨵���¼�
//oLis[2].onclick=function(){
//    alert(i);
//};
//
//i=3 ѭ������
//
//�������û���ʼ���li,������������li,ִ�ж�Ӧ�ķ���,�ѿ�ʼ�洢���ַ�����ΪJS����ִ�� alert(i); ��ʱ��i�Ѿ�����3��


//3)��ν������������
//A���Զ���������:���Ǹ�Ԫ�ض������ӵ��Լ����������
for (var i = 0; i < oLis.length; i++) {
    oLis[i].zhuFeng = i;//->ÿһ��ѭ������ÿһ��li����һ���Զ��������zhuFeng,Ŀ���Ǵ洢�Լ�������

    oLis[i].onclick = function () {
        //tabChange(i); ->���ǵ�Ŀ����ִ��tabChange�ѵ�ǰ��������li���������ݽ�ȥ,���ǲ�����i,��Ϊi�Ѿ���Ϊ��3��
        //this->����ľ��ǵ�ǰ��������li this.zhuFeng->����ľ��ǵ�ǰ��������li������
        tabChange(this.zhuFeng);
    };
}
//�Զ�����������������JS����á����á�ΰ��ı��˼��