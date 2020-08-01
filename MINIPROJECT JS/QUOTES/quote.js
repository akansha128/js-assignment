let quotes = [
    "Life is what happens when you are busy making other plans...   - John Lennon",
    "A friend is one that knows you are, understands where you have been, accepts what you have become,and still,gently allows you to grow...   - william Shakespeare",
    "Great minds discuss ideas;average minds discuss events;small minds discuss people...   -Eleanor Roosevelt",
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him...   -David Brinkley",
    "You only live once.but if you do it right ,once is enough..   - Mae west",
    "Love yourself first and everything else falls into linne. you really have to love yourself to get anything done in this world..   - lucille Ball",
    "Let us always meet each other with smile,for the smile is the beginning of love..   -Mother Teresa",
    "Remember that happiest people are not those getting mpore,but those giving more..   -h.Jackson brown,jr. ",
    "The oppsite of love is not hate; it's indifference...   - Elie Wiesel",
    "Life is 10 % what happens to you and 90% how you respond to it ...   - Charles Swindoll",
]

function newQuote()
{
    let randomnumber= Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomnumber];
}