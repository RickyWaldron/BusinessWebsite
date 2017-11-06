


        $(document).ready(function() {
            $(".container1").show(1000);
        })

        $(".signupbtn").click(function() {
            $(".container1").hide(1000)
            $(".subscribedText").show(1000)

        })

        $(".cancelbtn").click(function() {
            $(".container1").hide(1000)
            $(".notSubscribedText").show(1000)
        })

        $(".closeNewsletter").click(function() {
            $(".subscribedText").hide(1000)
            $(".notSubscribedText").hide(1000)
        })
