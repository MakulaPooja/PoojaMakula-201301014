var name = "नर मन बस कमल कलश समय सफल फलक हसरत";
        var wordArr;
        var noOfWords;

        var str;
        var le;

        function myFunction(designerName) {
            str = designerName.replace(" ", "");
            return le = str.length;
        }


        String.prototype.shuffle = function () {
            var a = this.split(""),
                n = a.length;

            for (var i = n - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
            return a.join("");
        }


        $(document).ready(function () {

            wordArr = $.trim(name).split(' ');

            noOfWords = $.trim(name).split(' ').length;

            for (var i = 0; i <= (noOfWords - 1); i++) {

                var l = myFunction(wordArr[i]);
                var sf = str.shuffle();
                //alert(i+"th word=>"+wordArr[i]+"=>shuffle=>"+sf);
                var line_class = i == 0 ? "firstLine" : i == 1 ? "secondLine" : "thirdLine"
                $("#jumbleWords").append("<div id=word_" + i + " class='ui-sortable jumbleText'" + line_class + "> </div><br/><br/>");

                for (var j = 0; j < l; j++) {
                    //alert("Letter==>"+sf.charAt(j));

                    $("#word_" + i).append("<label class=ls id=word_" + i + "_" + j + ">" + sf.charAt(j) + "</label>");
                }
                $("#word_" + i).sortable({
                    axis: 'x',
                    items: 'label:not(.correctText)',
                    cancel: '.correctText',
                    scrollSensitivity: 1,
                    tolerance: "pointer",
                    start: function () {
                        $(this).find("label:not(.ls)").each(function () {
                            $(this).data("fixedIndex", $(this).index());
                        });
                    },
                    change: function () {
                        $(this).find("label:not(.ls)").each(function () {
                            attrID = $(this).closest(".ui-sortable").attr("id");
                            if ($(this).data("fixedIndex") != 0) {
                                //alert($(this).data("fixedIndex"));
                                $(this).detach().insertAfter($("#" + attrID + " label:eq(" + ($(this).data("fixedIndex") - 1) + ")"));
                            } else {
                                //alert("second");
                                $(this).detach().insertBefore($("#" + attrID + " label:eq(" + ($(this).data("fixedIndex")) + ")"));
                            }
                        });
                    },
                    stop: function () {
                        var textValue = name.split(" ");
                        $(".ui-sortable").each(function (sortIndex, sortDiv) {
                            $(sortDiv).find("label").each(function (index, elem) {
                                if (textValue[sortIndex][index] == $.trim($(elem).text())) {
                                    $(elem).removeClass("ls").addClass("correctText");
                                } else {
                                    $(elem).removeClass("correctText").addClass("ls");
                                }

                            });
                        });
                        
                       var total =$(this).find('label');
                        if(total.length === total.filter('.correctText').length){
                        
                            alert('correct');
                        }
						
                    }
                });
                $("#word_" + i + " label.correctText").disableSelection();
            }

            //$(".submit_answer").click(function () {});
        });
