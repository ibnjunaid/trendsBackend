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

export const TrendingLocationsPipe = (trend:string) => {
    return ([
      {
        '$unwind': {
          'path': '$trends'
        }
      }, {
        '$project': {
          'trend': '$trends.name', 
          'volume': '$trends.tweet_volume', 
          'name': 1, 
          'as_of': 1
        }
      }, {
        '$match': {
          'trend': trend
        }
      }, {
        '$group': {
          '_id': '$name', 
          'avg_tweet_volume': {
            '$avg': '$volume'
          }
        }
      },
    ]);
}

export const ByWoeidPipe  =(woeid : Number) => {
  return (
    [
      {
        '$match': {
          'woeid': woeid
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