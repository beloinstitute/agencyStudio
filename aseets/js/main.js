console.log("hello world")

function reverseWords(str){

    var result =  str.split(" ")
    var reverse = result.reverse();
    var string = reverse.join(" ")
    return string;
  }
 console.log(reverseWords("where do you come from?"))
