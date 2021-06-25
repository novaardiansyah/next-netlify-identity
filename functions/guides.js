                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
exports.handler = async (event, context) => {
  const guides = [
    {
      "id": 1,
      "author": "Hannah Dael",
      "title": "Internal Auditor"
    },
    {
      "id": 2,
      "author": "Lombard Bateup",
      "title": "Financial Advisor"
    },
    {
      "id": 3,
      "author": "Hurlee Littrick",
      "title": "Assistant Manager"
    },
    {
      "id": 4,
      "author": "Dulcie Courtois",
      "title": "General Manager"
    },
    {
      "id": 5,
      "author": "Caty Lovewell",
      "title": "Dental Hygienist"
    },
    {
      "id": 6,
      "author": "Elbertina Ragles",
      "title": "Computer Systems Analyst III"
    },
    {
      "id": 7,
      "author": "Kelby Giraldo",
      "title": "Account Coordinator"
    },
    {
      "id": 8,
      "author": "Mikey Youd",
      "title": "Financial Advisor"
    },
    {
      "id": 9,
      "author": "Daphna Maddigan",
      "title": "Nuclear Power Engineer"
    },
    {
      "id": 10,
      "author": "Gratiana Kliemchen",
      "title": "Structural Analysis Engineer"
    }
  ]
  
  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides)
    }
  }
  
  return {
    statusCode: 401,
    body: JSON.stringify({ message: 'you must first login to be able to see the premium guide' })
  }
}