// ParsleyConfig definition if not already set
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};
window.ParsleyConfig.validators = window.ParsleyConfig.validators || {};
// Define then the messages
window.ParsleyConfig.i18n.zh_cn = $.extend(window.ParsleyConfig.i18n.zh_cn
    || {}, {
    defaultMessage: "不正确的值",
    type: {
        email: "请输入一个有效的电子邮箱地址",
        url: "请输入一个有效的链接",
        number: "请输入正确的数字",
        integer: "请输入正确的整数",
        digits: "请输入正确的号码",
        alphanum: "请输入字母或数字",
        rate: "请输入正确的汇率",
        htmlName: "请输入正确的html文件名称",
        selectrequired: "该项为必填项"
    },
    notblank: "请输入值",
    required: "必填项",
    pattern: "格式不正确",
    min: "输入值请大于或等于 %s",
    max: "输入值请小于或等于 %s",
    range: "输入值应该在 %s 到 %s 之间",
    minlength: "请输入至少 %s 个字符",
    maxlength: "请输入至多 %s 个字符",
    length: "字符长度应该在 %s 到 %s 之间",
    mincheck: "请至少选择 %s 个选项",
    maxcheck: "请选择不超过 %s 个选项",
    check: "请选择 %s 到 %s 个选项",
    equalto: "输入值不同",
    dateiso: "请输入正确格式的日期 (YYYY-MM-DD)"
});
// If file is loaded after Parsley main file, auto-load locale
if ('undefined' !== typeof window.Parsley)
    window.Parsley.addCatalog('zh_cn', window.ParsleyConfig.i18n.zh_cn, true);
$(function () {
    window.Parsley.addValidator('price', {
        validateString: function (value) {
            var price = /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;
            return (price.test(value));
        },
        messages: {
            zh_cn: '请填写正确的金额'
        }
    });
    window.Parsley.addValidator('phone', {
        validateString: function (value) {
            var phone = /^1[3|4|5|7|8][0-9]\d{8}$/;
            return (phone.test(value));
        },
        messages: {
            zh_cn: '请填写正确的手机号码'
        }
    });
    window.Parsley.addValidator('selectrequired', {
        validateString: function (value) {
            var selectrequired = /\S/;
            return (selectrequired.test(value));
        },
        messages: {
            zh_cn: '该项为必选项'
        }
    });
        window.Parsley.addValidator('htmlname', {
        validateString: function (value) {
            var htmlname = /^\w+(\.[h][t][m][l])$/;
            return (htmlname.test(value));
        },
        messages: {
            zh_cn: '请输入正确的html文件名称'
        }
    });
    window.Parsley.addValidator('rate', {
        validateString: function (value) {
            var rate = /^([1-9]\d*|0)(\.\d{1,2})?$/;
            return (rate.test(value));
        },
        messages: {
            zh_cn: '请填写正确的比率'
        }
    });

    window.Parsley.addValidator('email', {
        validateString: function (value) {
            var email = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;
            return (email.test(value));
        },
        messages: {
            zh_cn: '请填写正确的电子邮箱'
        }
    });

    window.Parsley.addValidator('idcard', {
        validateString: function (value) {
            var res = false;// 验证的结果
            // 身份证号码的正则表达式
            var reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
            //如果通过该验证，说明身份证格式正确，但准确性还需计算
            if (reg.test(value)) {
                if (value.length == 18) {
                    var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
                    var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
                    var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
                    for (var i = 0; i < 17; i++) {
                        idCardWiSum += value.substring(i, i + 1) * idCardWi[i];
                    }

                    var idCardMod = idCardWiSum % 11;//计算出校验码所在数组的位置
                    var idCardLast = value.substring(17);//得到最后一位身份证号码

                    //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
                    if (idCardMod == 2) {
                        if (idCardLast == "X" || idCardLast == "x") {
                            res = true;
                        }
                    } else {
                        //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                        if (idCardLast == idCardY[idCardMod]) {
                            res = true;
                        }
                    }
                }
            }
            return res;
        },
        messages: {
            zh_cn: '请填写正确的身份证号码'
        }
    });
    window.Parsley.addValidator('telephonemobile', {
        validateString: function (value) {
            var telephonemobile = /^(0\d{2,3}-?\d{7,8})$|^(1[3|4|5|7|8][0-9]\d{8})$/;
            return (telephonemobile.test(value));
        },
        messages: {
            zh_cn: '请填写正确的手机号码或固话号码'
        }
    });
});
