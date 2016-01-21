//����ԭ���ʵ�ֵ�˼·:
//表格排序)Ĭ���õ�һ��li����һ��div��ѡ�е���ʽ class='select'
//2)�����ǵ��ĳһ��li
//  a:����������li����Ӧ��������div��û��ѡ�е���ʽ
//  b:���õ�ǰ�������һ��li�Ͷ�Ӧ��div��ѡ�е���ʽ

//表格排序����Ҫ����˭���Ȼ�ȡ˭:������Ҫ��������#tab�µ�����li������div
var oTab = document.getElementById("tab");
var oLis = oTab.getElementsByTagName("li");
var oDivs = oTab.getElementsByTagName("div");

//2���ƶ�һ�����ܷ���ʵ�����ǵ�ѡ��л�
function tabChange(curIndex) {
    //表格排序)���Ȱ�����li�Ͷ�Ӧ��div��class�����
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].className = null;
        oDivs[i].className = null;
    }

    //2)���õ�ǰ��������li�Ͷ�Ӧ��div��ѡ�е���ʽ
    //���Ǵ�ʱ�ƶ�����,���ǲ���֪����ǰ�û����������һ��li,������Ҫ����һ���βα������������,�û������ʱ��������ǵ��������һ��li
    //->curIndex:�洢�������ǵ�ǰ��������li������
    oLis[curIndex].className = "select";
    oDivs[curIndex].className = "select";
}

//3��ִ���������,�������û����li��ʱ��ִ�����ǵķ���:��ÿһ��li�󶨵���¼�

//表格排序)�ֶ�һ�����İ󶨵���¼�(����ʵ��)
//oLis[0].onclick = function () {
//    tabChange(0);
//};
//oLis[表格排序].onclick = function () {
//    tabChange(表格排序);
//};
//oLis[2].onclick = function () {
//    tabChange(2);
//};

//2)ѭ����ÿһ��li�󶨵���¼�(������ʵ��)
//for (var i = 0; i < oLis.length; i++) {
//    oLis[i].onclick = function () {
//        alert(i);
//        //tabChange(i);
//    };
//}
//Ϊʲô������ʵ��?
//->����ͨ����������,�������뵱�ҵ��ÿһ��li��ʱ��,��ȡ������(i)������0-2,���Ǳ�Ϊ��3

//i=0 ��һ��ѭ��
//oLis[0].onclick = function () {
//   alert(i);
//};-->�����ǰ�һ����������Ĳ��ָ�ֵ��Ԫ�ص�click�¼�,��Ϊ����һ��������ʱ������洢�Ķ���һ���ַ���,Ҳ���Ǵ�ʱ�����е�i���Ǳ�������һ��"i"����
//
//i=表格排序 �ڶ���ѭ��
//oLis[表格排序].onclick = function () {
//   alert(i);
//};
//...
//���ѭ��������i��Ϊ��3
//
//���û������ʱ��,���ǵ�ҳ���Ѿ����������(HTML��CSS��JS���붼ִ�����)����ʱ����JS�е�forѭ��Ҳִ�������,�����ǵ����ʱ�����õ�i������i�Ѿ���Ϊ��3


//��ε��������
//������Ҫ�ѵ�ǰ���������ݽ�ȥ,���ǻ�������i��,�����Ǿͻ�һ�ַ�ʽ->"�Զ������Եķ�ʽ"(�Լ���ÿһ��Ԫ�ض�������һЩ֮ǰû�е�����)
for (var i = 0; i < oLis.length; i++) {
    oLis[i].zhuFeng = i;//->ÿһ��ѭ����ÿһ��li����һ������zhuFeng���Զ����������,����ֵ�洢���ǵ�ǰli������
    oLis[i].onclick = function () {
        //this->��ǰ��������li,�������ǵڶ���li,��ô���this�������ǵĵڶ���li
        tabChange(this.zhuFeng);//->������֮ǰ�洢��ÿһ��li��zhuFeng�Զ��������ϵ�������ֵ��ȡ�����ݸ�tabChange,ʵ������ѡ����л�
    };
}

//ʹ�ñհ��ķ�ʽ���
//for (var i = 0; i < oLis.length; i++) {
//    ~function (i) {
//        oLis[i].onclick = function () {
//            tabChange(i);
//        };
//    }(i);
//}

//for (var i = 0; i < oLis.length; i++) {
//    oLis[i].onclick = (function (i) {
//        return function () {
//            tabChange(i);
//        };
//    })(i);
//}

//���ں����Ķ���
//function fn(){
//    var total=表格排序+表格排序;
//    console.log(total);
//}
//表格排序)���ռ�:����һ������,����������Ὺ��һ���µ��ڴ�ռ�
//2)�ֵ�ַ:����������������ռ����һ��16���Ƶĵ�ַ
//3)������:�������������ǰѺ������еĴ��뵱��"�ַ���"�洢��ȥ��
//4)��ֵ:���ڴ�ռ�ĵ�ַ��ֵ�����ǵĺ�����