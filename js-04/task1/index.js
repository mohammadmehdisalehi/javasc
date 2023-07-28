function find_word(str, myWord){
    
    var wordFreq = 0, wordLen=0;
   
    for (i=0;i< str.length;i++)
        {
        if(str[i] == myWord[0])
            {
            for(j=i;j< i+myWord.length;j++)
               {
                if(str[j]==myWord[j-i])
                  {
                    wordLen++;
                  }
                if (wordLen==myWord.length){
                    wordFreq++;
                }
            }
            wordLen=0;
        }
    }
   return "This string contains '"+wordFreq+"'"+myWord+"'" ;
}

console.log(find_word('the black box in black road.', 'black'));