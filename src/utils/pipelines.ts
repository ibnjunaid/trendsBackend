export const sortByMaxTweetVolume = [
  {
    '$unwind': {
      'path': '$trends'
    }
  }, {
    '$project': {
      'trend': '$trends.name', 
      'volume': '$trends.tweet_volume', 
      'name': '$name', 
      'woeid': '$woeid'
    }
  }, {
    '$group': {
      '_id': '$trend', 
      'volume': {
        '$avg': '$volume'
      }, 
      'places': {
        '$addToSet': '$$ROOT.name'
      }
    }
  }, {
    '$sort': {
      'volume': -1
    }
  }, {
    '$limit': 100
  }, {
    '$project': {
      '_id': 0, 
      'trend': '$_id', 
      'volume': 1, 
      'places': 1
    }
  }
]

export const TrendingLocationsPipe = (hashtag:string) => {
  return (
    [
      {
        '$match': {
          'trends.name': hashtag
        }
      }, {
        '$project': {
          '_id': 0, 
          'as_of': 1, 
          'name': 1, 
          'trend': {
            '$first': {
              '$filter': {
                'input': '$trends', 
                'as': 'trend', 
                'cond': {
                  '$eq': [
                    '$$trend.name', hashtag
                  ]
                }
              }
            }
          }
        }
      }, {
        '$sort': {
          'as_of': -1
        }
      }, {
        '$group': {
          '_id': '$name', 
          'fieldN': {
            '$push': '$$ROOT'
          }
        }
      }, {
        '$project': {
          '_id': 0, 
          'trend': {
            '$arrayElemAt': [
              '$fieldN', 0
            ]
          }
        }
      }, {
        '$project': {
          'as_of': '$trend.as_of', 
          'name': '$trend.name', 
          'trend': '$trend.trend'
        }
      }
    ]
  )
}

export const FirstTrending = (trend : String) => {
  return (
    [
      {
        '$unwind': {
          'path': '$trends'
        }
      }, {
        '$project': {
          'trend': '$trends.name', 
          'volume': '$trends.tweet_volume', 
          'index': '$trends.index', 
          'place': '$name', 
          'as_of': 1
        }
      }, {
        '$match': {
          'trend': trend
        }
      }, {
        '$sort': {
          'as_of': 1
        }
      }, {
        '$project': {
          '_id': 0, 
          'as_of':1,
          'trend': 1, 
          'volume': 1, 
          'index': 1, 
          'place': 1
        }
      }
    ]
  )
} 

export const ByNamePipe  =(name : String) => {
  return (
    [
      {
        '$match': {
          'name': name
        }
      }, {
        '$unwind': {
          'path': '$trends'
        }
      }, {
        '$match': {
          'trends.index': {
            '$lte': 20
          }
        }
      }, {
        '$group': {
          '_id': '$as_of', 
          'trends': {
            '$push': '$$ROOT.trends'
          }
        }
      }, {
        '$sort': {
          '_id': -1
        }
      }, {
        '$limit': 50
      }
    ]
  )
}

export const ByWoeidAndDatePipe = (woeid:Number,startTime:number,endTime:number) => {
  return (
    [
      {
        '$match': {
          'woeid': woeid, 
          'as_of': {
            '$gte': new Date(startTime), 
            '$lte': new Date(endTime)
          }
        }
      }, {
        '$unwind': {
          'path': '$trends'
        }
      }, {
        '$match': {
          'trends.index': {
            '$lte': 20
          }
        }
      }, {
        '$group': {
          '_id': '$as_of', 
          'trends': {
            '$push': '$$ROOT.trends'
          }
        }
      }, {
        '$sort': {
          '_id': -1
        }
      }, {
        '$limit': 50
      }
    ]
  )
}

