
$(function(){


    // 点击展开收起通用
    $(".select_mode > .inner_box").click(function(){
        var a = $(this).siblings(".option_list");
        var b = $(this).parents(".select_mode");
        if(b.hasClass("un_change")){
            }else {
            if(b.hasClass("down")){
                b.removeClass("down");
                a.hide();
            }else{
                b.addClass("down");
                a.show();
            }
        }
    });


    // 单选一层替换选中文本
    $(".option_list1 li").click(function () {
        var a = $(this).parents(".select_mode1");
        $(this).siblings().removeClass("actives");
        $(this).addClass("actives");
         var new_val = $(this).text();
        a.find("input",this).val(new_val);
    });


    // 点击加减号展开收起子级
    $(".select_mode i.child_grade").click(function () {
        // 给父级加标识
        var target_parent = $(this).parents("li").eq(0);
        if(target_parent.hasClass("open")){
            target_parent.removeClass("open");
        }
        else{
            target_parent.addClass("open");
        }
    });


    // 点击文字选中当前类别
    $(".select_mode ul li span").click(function () {
       
            var target_li = $(this).parents("li").eq(0);//当前点击的li
        if(target_li.hasClass('color_dis')){
            return
        }else{
            if(target_li.hasClass("active")&&target_li.not('.color_dis')){//如果是已经选中的
                target_li.removeClass("active");
                target_li.parents("li").removeClass("active");//取消它的父级的全选效果
                target_li.find("li").removeClass("active");//取消它的子级的全选效果
            }else {//如果是未选中的
                target_li.addClass("active");
                target_li.find("li").not('.color_dis').addClass("active");//选中它的所有子级
                var parents_list = target_li.parents("ul");
                for(var i=0;i<parents_list.length;i++){
                    var siblings_li_num = parents_list.eq(i).find("li").length;
                    var active_li_num = parents_list.eq(i).find("li.active").length;
                    if(siblings_li_num <= active_li_num){
                        parents_list.eq(i).parents("li").eq(0).addClass("active");
                    }
                }
            }
        }
           
        })
});

