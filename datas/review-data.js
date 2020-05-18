let goodCount=231
let middleCount=3
let badCount=34
let reviews=[
    {
        'id':1,
        'avatar':'/images/avatar/1.png',
        'author':'lisa',
        'authorId':1,   
        'content':'sddfadf',
        'sum':'4',
        'childReviews':[
            {
                'id':2,
                'from':'monica',
                'to':'lisa',
                'toId':1,
                'content':'xxfsds'
            },
            {
                'id':2,
                'from':'monica',
                'to':'lisa',
                'toId':3,
                'content':'xxfsds'
            },{
                'id':2,
                'from':'monica',
                'to':'lisa',
                'toId':3,
                'content':'xxfsdflasdjlfkjasdlfjladjflasdjflkads'
            },{
                'id':2,
                'from':'monica',
                'to':'lisa',
                'toId':1,
                'content':'xxfsdflasdjlfkjasdlfjladjflasdjflkads'
            }
        ]
    }
]
module.exports={goodCount,middleCount,badCount,reviews}