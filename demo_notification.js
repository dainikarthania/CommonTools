const _=require('lodash')
let  notification=[
    {
      "id": 2340,
      "data": {
        "isread": false,
        "deleted": false,
        "post_id": 79,
        "auhtor_id": 406,
        "channel_id": 1
      },
      "subject_id": "83",
      "type": "channel_comment",
      "activity_type": "c_comment",
      "receipent": {
        "type": "cp"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-23T12:44:59.837Z",
      "updatedAt": "2021-02-23T12:44:59.837Z"
    },
    {
      "id": 2339,
      "data": {
        "isread": false,
        "deleted": false,
        "post_id": 79,
        "auhtor_id": 406,
        "channel_id": 1
      },
      "subject_id": "82",
      "type": "channel_comment",
      "activity_type": "c_comment",
      "receipent": {
        "type": "cp"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-23T12:41:53.652Z",
      "updatedAt": "2021-02-23T12:41:53.652Z"
    },
    {
      "id": 2338,
      "data": {
        "isread": false,
        "deleted": false,
        "post_id": 79,
        "auhtor_id": 406,
        "channel_id": 1
      },
      "subject_id": "81",
      "type": "channel_comment",
      "activity_type": "c_comment",
      "receipent": {
        "type": "cp"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-23T12:39:45.601Z",
      "updatedAt": "2021-02-23T12:39:45.601Z"
    },
    {
      "id": 2307,
      "data": {
        "deleted": "false",
        "channel_id": 1
      },
      "subject_id": "o7HB4S",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-23T11:07:41.468Z",
      "updatedAt": "2021-02-23T11:07:41.468Z"
    },
    {
      "id": 2306,
      "data": {
        "deleted": "false",
        "channel_id": 1
      },
      "subject_id": "kCLdLJ",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-23T11:06:15.564Z",
      "updatedAt": "2021-02-23T11:06:15.564Z"
    },
    {
      "id": 2270,
      "data": {
        "deleted": "false",
        "channel_id": 1
      },
      "subject_id": "RxfV5F",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-23T09:58:19.351Z",
      "updatedAt": "2021-02-23T09:58:19.351Z"
    },
    {
      "id": 2269,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "7KVvSY",
      "type": "stream_like",
      "activity_type": "like",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [
        391
      ],
      "createdAt": "2021-02-23T09:56:55.413Z",
      "updatedAt": "2021-02-23T09:56:55.413Z"
    },
    {
      "id": 2268,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "ciMYiu",
      "type": "stream_like",
      "activity_type": "like",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [
        391
      ],
      "createdAt": "2021-02-23T09:10:51.949Z",
      "updatedAt": "2021-02-23T09:10:51.949Z"
    },
    {
      "id": 2262,
      "data": {
        "deleted": "false",
        "channel_id": 1
      },
      "subject_id": "uoZNFY",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-23T08:45:51.413Z",
      "updatedAt": "2021-02-23T08:45:51.413Z"
    },
    {
      "id": 2259,
      "data": {
        "deleted": "false",
        "channel_id": 1
      },
      "subject_id": "37nh8f",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-23T07:29:57.877Z",
      "updatedAt": "2021-02-23T07:29:57.877Z"
    },
    {
      "id": 2064,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "xkC1QT",
      "type": "stream_like",
      "activity_type": "like",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [
        391,
        390
      ],
      "createdAt": "2021-01-21T06:17:27.038Z",
      "updatedAt": "2021-02-23T05:49:48.040Z"
    },
    {
      "id": 2253,
      "data": {
        "deleted": "false",
        "channel_id": 1
      },
      "subject_id": "EE2W3C",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-18T16:25:52.966Z",
      "updatedAt": "2021-02-18T16:25:52.966Z"
    },
    {
      "id": 2234,
      "data": {
        "deleted": "false"
      },
      "subject_id": "z4zXjl",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-17T12:18:58.636Z",
      "updatedAt": "2021-02-17T12:18:58.636Z"
    },
    {
      "id": 2233,
      "data": {
        "deleted": "false"
      },
      "subject_id": "SJ6vA3",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-17T12:18:11.264Z",
      "updatedAt": "2021-02-17T12:18:11.264Z"
    },
    {
      "id": 2232,
      "data": {
        "channel_id": 1
      },
      "subject_id": "UiLGJk",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-15T08:54:33.489Z",
      "updatedAt": "2021-02-15T08:54:33.489Z"
    },
    {
      "id": 2231,
      "data": {
        "channel_id": 1
      },
      "subject_id": "OzVOav",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-15T08:53:45.852Z",
      "updatedAt": "2021-02-15T08:53:45.852Z"
    },
    {
      "id": 2230,
      "data": {
        "channel_id": 1
      },
      "subject_id": "MK8BDj",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-15T06:35:11.868Z",
      "updatedAt": "2021-02-15T06:35:11.868Z"
    },
    {
      "id": 2225,
      "data": {
        "channel_id": 1
      },
      "subject_id": "LXvwiE",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-15T06:19:17.736Z",
      "updatedAt": "2021-02-15T06:19:17.736Z"
    },
    {
      "id": 2221,
      "data": {
        "channel_id": 1
      },
      "subject_id": "I4aUAd",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-12T07:39:55.822Z",
      "updatedAt": "2021-02-12T07:39:55.822Z"
    },
    {
      "id": 2220,
      "data": {
        "channel_id": 1
      },
      "subject_id": "rRYqwy",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-12T07:03:18.729Z",
      "updatedAt": "2021-02-12T07:03:18.729Z"
    },
    {
      "id": 2205,
      "data": {
        "channel_id": 1
      },
      "subject_id": "3x5Uka",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-12T06:01:50.681Z",
      "updatedAt": "2021-02-12T06:01:50.681Z"
    },
    {
      "id": 2203,
      "data": {
        "channel_id": 1
      },
      "subject_id": "SOQLvu",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-08T09:17:30.063Z",
      "updatedAt": "2021-02-08T09:17:30.063Z"
    },
    {
      "id": 2201,
      "data": {
        "channel_id": 1
      },
      "subject_id": "nwiilp",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-08T09:08:18.052Z",
      "updatedAt": "2021-02-08T09:08:18.052Z"
    },
    {
      "id": 2200,
      "data": {
        "channel_id": 1
      },
      "subject_id": "C9vUaT",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-08T07:04:54.144Z",
      "updatedAt": "2021-02-08T07:04:54.144Z"
    },
    {
      "id": 2199,
      "data": {
        "channel_id": 1
      },
      "subject_id": "i8QGci",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-08T07:01:43.537Z",
      "updatedAt": "2021-02-08T07:01:43.537Z"
    },
    {
      "id": 2198,
      "data": {},
      "subject_id": "tcSc64",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-05T11:52:48.988Z",
      "updatedAt": "2021-02-05T11:52:48.988Z"
    },
    {
      "id": 2145,
      "data": {
        "channel_id": 1
      },
      "subject_id": "xkE3Oz",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-03T09:11:52.529Z",
      "updatedAt": "2021-02-03T09:11:52.529Z"
    },
    {
      "id": 2146,
      "data": {},
      "subject_id": "7ol60P",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-02-03T09:11:52.529Z",
      "updatedAt": "2021-02-03T09:11:52.529Z"
    },
    {
      "id": 2139,
      "data": {
        "channel_id": 1
      },
      "subject_id": "08f4UF",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:58:34.660Z",
      "updatedAt": "2021-01-28T06:58:34.660Z"
    },
    {
      "id": 2137,
      "data": {
        "channel_id": 1
      },
      "subject_id": "4zNTAa",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:57:01.524Z",
      "updatedAt": "2021-01-28T06:57:01.524Z"
    },
    {
      "id": 2138,
      "data": {},
      "subject_id": "A9C3pa",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:57:01.524Z",
      "updatedAt": "2021-01-28T06:57:01.524Z"
    },
    {
      "id": 2135,
      "data": {
        "channel_id": 1
      },
      "subject_id": "KdWla5",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:54:22.737Z",
      "updatedAt": "2021-01-28T06:54:22.737Z"
    },
    {
      "id": 2136,
      "data": {},
      "subject_id": "eHtyln",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:54:22.737Z",
      "updatedAt": "2021-01-28T06:54:22.737Z"
    },
    {
      "id": 2133,
      "data": {
        "channel_id": 1
      },
      "subject_id": "1x8GTr",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:52:15.860Z",
      "updatedAt": "2021-01-28T06:52:15.860Z"
    },
    {
      "id": 2134,
      "data": {},
      "subject_id": "j9HW4a",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:52:15.860Z",
      "updatedAt": "2021-01-28T06:52:15.860Z"
    },
    {
      "id": 2131,
      "data": {
        "channel_id": 1
      },
      "subject_id": "MWgbyf",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:45:32.604Z",
      "updatedAt": "2021-01-28T06:45:32.604Z"
    },
    {
      "id": 2132,
      "data": {},
      "subject_id": "pJABwz",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:45:32.604Z",
      "updatedAt": "2021-01-28T06:45:32.604Z"
    },
    {
      "id": 2129,
      "data": {
        "channel_id": 1
      },
      "subject_id": "SXQdvA",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:43:29.934Z",
      "updatedAt": "2021-01-28T06:43:29.934Z"
    },
    {
      "id": 2130,
      "data": {},
      "subject_id": "2PblnO",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:43:29.934Z",
      "updatedAt": "2021-01-28T06:43:29.934Z"
    },
    {
      "id": 2127,
      "data": {
        "channel_id": 1
      },
      "subject_id": "q8pzST",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:40:36.924Z",
      "updatedAt": "2021-01-28T06:40:36.924Z"
    },
    {
      "id": 2128,
      "data": {},
      "subject_id": "BrtniJ",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:40:36.924Z",
      "updatedAt": "2021-01-28T06:40:36.924Z"
    },
    {
      "id": 2125,
      "data": {
        "channel_id": 1
      },
      "subject_id": "csPOTD",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:39:45.791Z",
      "updatedAt": "2021-01-28T06:39:45.791Z"
    },
    {
      "id": 2126,
      "data": {},
      "subject_id": "YKyYld",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:39:45.791Z",
      "updatedAt": "2021-01-28T06:39:45.791Z"
    },
    {
      "id": 2123,
      "data": {
        "channel_id": 1
      },
      "subject_id": "Qb9vhm",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:38:32.036Z",
      "updatedAt": "2021-01-28T06:38:32.036Z"
    },
    {
      "id": 2124,
      "data": {},
      "subject_id": "m2KvpQ",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:38:32.036Z",
      "updatedAt": "2021-01-28T06:38:32.036Z"
    },
    {
      "id": 2121,
      "data": {
        "channel_id": 1
      },
      "subject_id": "L2omzF",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:37:38.092Z",
      "updatedAt": "2021-01-28T06:37:38.092Z"
    },
    {
      "id": 2122,
      "data": {},
      "subject_id": "7E6Oz2",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:37:38.092Z",
      "updatedAt": "2021-01-28T06:37:38.092Z"
    },
    {
      "id": 2119,
      "data": {
        "channel_id": 1
      },
      "subject_id": "IJaBuE",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:33:00.325Z",
      "updatedAt": "2021-01-28T06:33:00.325Z"
    },
    {
      "id": 2120,
      "data": {},
      "subject_id": "jcnq6e",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:33:00.325Z",
      "updatedAt": "2021-01-28T06:33:00.325Z"
    },
    {
      "id": 2117,
      "data": {
        "channel_id": 1
      },
      "subject_id": "OxKfVD",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:29:10.607Z",
      "updatedAt": "2021-01-28T06:29:10.607Z"
    },
    {
      "id": 2118,
      "data": {},
      "subject_id": "hLbIP2",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:29:10.607Z",
      "updatedAt": "2021-01-28T06:29:10.607Z"
    },
    {
      "id": 2115,
      "data": {
        "channel_id": 1
      },
      "subject_id": "8rMXPe",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:26:45.521Z",
      "updatedAt": "2021-01-28T06:26:45.521Z"
    },
    {
      "id": 2116,
      "data": {},
      "subject_id": "YWNcOH",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "f"
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:26:45.521Z",
      "updatedAt": "2021-01-28T06:26:45.521Z"
    },
    {
      "id": 2114,
      "data": {
        "channel_id": 1
      },
      "subject_id": "dgBeEM",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-28T06:23:18.023Z",
      "updatedAt": "2021-01-28T06:23:18.023Z"
    },
    {
      "id": 2089,
      "data": {
        "isread": false,
        "deleted": false,
        "channel_id": 4
      },
      "subject_id": "h5vI1I",
      "type": "stream_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 390
      },
      "actor": 390,
      "actors": null,
      "createdAt": "2021-01-21T15:11:48.329Z",
      "updatedAt": "2021-01-21T15:11:48.329Z"
    },
    {
      "id": 2065,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "GwF9EY",
      "type": "stream_like",
      "activity_type": "like",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [
        390
      ],
      "createdAt": "2021-01-21T06:17:32.423Z",
      "updatedAt": "2021-01-21T06:17:32.423Z"
    },
    {
      "id": 2055,
      "data": {
        "isread": false,
        "deleted": false,
        "channel_id": 1
      },
      "subject_id": "iL2C5j",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-19T12:30:08.000Z",
      "updatedAt": "2021-01-19T12:30:08.000Z"
    },
    {
      "id": 2047,
      "data": {
        "isread": false,
        "deleted": false,
        "channel_id": 1
      },
      "subject_id": "UgiWH0",
      "type": "media_create",
      "activity_type": "create",
      "receipent": {
        "type": "s",
        "user": 402
      },
      "actor": 402,
      "actors": null,
      "createdAt": "2021-01-19T10:05:50.305Z",
      "updatedAt": "2021-01-19T10:05:50.305Z"
    },
    {
      "id": 2040,
      "data": {
        "isread": false,
        "deleted": false,
        "channel_id": 1
      },
      "subject_id": "67",
      "type": "channel_post",
      "activity_type": "c_post",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-18T07:30:08.594Z",
      "updatedAt": "2021-01-18T07:32:18.254Z"
    },
    {
      "id": 2039,
      "data": {
        "isread": false,
        "deleted": false,
        "channel_id": 1
      },
      "subject_id": "66",
      "type": "channel_post",
      "activity_type": "c_post",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-18T07:30:07.427Z",
      "updatedAt": "2021-01-18T07:30:07.427Z"
    },
    {
      "id": 2038,
      "data": {
        "isread": false,
        "deleted": false,
        "channel_id": 1
      },
      "subject_id": "65",
      "type": "channel_post",
      "activity_type": "c_post",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-18T07:29:04.362Z",
      "updatedAt": "2021-01-18T07:29:32.727Z"
    },
    {
      "id": 2037,
      "data": {
        "isread": false,
        "deleted": false,
        "channel_id": 1
      },
      "subject_id": "64",
      "type": "channel_post",
      "activity_type": "c_post",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-18T07:27:48.404Z",
      "updatedAt": "2021-01-18T07:28:12.880Z"
    },
    {
      "id": 2036,
      "data": {
        "isread": false,
        "deleted": false,
        "channel_id": 1
      },
      "subject_id": "63",
      "type": "channel_post",
      "activity_type": "c_post",
      "receipent": {
        "type": "s",
        "user": 391
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2021-01-18T07:25:57.097Z",
      "updatedAt": "2021-01-18T07:25:57.097Z"
    },
    {
      "id": 2104,
      "data": {
        "isread": false,
        "deleted": false,
        "channel_id": 1
      },
      "subject_id": "27",
      "type": "channel_post",
      "activity_type": "c_post",
      "receipent": {
        "type": "s",
        "user": 429
      },
      "actor": 402,
      "actors": null,
      "createdAt": "2021-01-18T06:14:47.654Z",
      "updatedAt": "2021-01-18T06:14:47.654Z"
    },
    {
      "id": 1713,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "406",
      "type": "follow",
      "activity_type": "follow",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [],
      "createdAt": "2020-03-05T13:00:02.895Z",
      "updatedAt": "2021-01-13T09:18:07.809Z"
    },
    {
      "id": 1747,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "406",
      "type": "follow",
      "activity_type": "follow",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [],
      "createdAt": "2020-03-20T07:24:18.363Z",
      "updatedAt": "2021-01-13T09:18:07.809Z"
    },
    {
      "id": 1786,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "406",
      "type": "follow",
      "activity_type": "follow",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [],
      "createdAt": "2020-04-25T05:52:26.782Z",
      "updatedAt": "2021-01-13T09:18:07.809Z"
    },
    {
      "id": 1802,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "406",
      "type": "follow",
      "activity_type": "follow",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [],
      "createdAt": "2020-06-02T06:35:36.037Z",
      "updatedAt": "2021-01-13T09:18:07.809Z"
    },
    {
      "id": 1831,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "406",
      "type": "follow",
      "activity_type": "follow",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [
        415
      ],
      "createdAt": "2020-06-25T10:45:42.614Z",
      "updatedAt": "2021-01-13T09:18:07.809Z"
    },
    {
      "id": 2000,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "MAuA5v",
      "type": "stream_like",
      "activity_type": "like",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [
        391
      ],
      "createdAt": "2021-01-12T09:25:30.232Z",
      "updatedAt": "2021-01-12T09:25:30.232Z"
    },
    {
      "id": 1927,
      "data": {
        "isread": false,
        "deleted": false,
        "share_id": 21
      },
      "subject_id": "M83HSA",
      "type": "stream_share",
      "activity_type": "share",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2020-12-02T12:53:07.051Z",
      "updatedAt": "2020-12-03T06:05:40.683Z"
    },
    {
      "id": 1917,
      "data": {
        "isread": false,
        "deleted": false,
        "share_id": 18
      },
      "subject_id": "M83HSA",
      "type": "stream_share",
      "activity_type": "share",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2020-09-29T06:10:23.978Z",
      "updatedAt": "2020-09-29T06:10:23.978Z"
    },
    {
      "id": 1738,
      "data": {
        "isread": false,
        "deleted": false,
        "share_id": 6
      },
      "subject_id": "rrfQfs",
      "type": "stream_share",
      "activity_type": "share",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2020-03-19T03:51:25.690Z",
      "updatedAt": "2020-09-10T10:46:43.085Z"
    },
    {
      "id": 1785,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "237",
      "type": "streamgroup_like",
      "activity_type": "like",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [],
      "createdAt": "2020-04-25T05:52:08.768Z",
      "updatedAt": "2020-06-26T15:58:01.201Z"
    },
    {
      "id": 1797,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "237",
      "type": "streamgroup_like",
      "activity_type": "like",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [],
      "createdAt": "2020-05-25T03:39:06.437Z",
      "updatedAt": "2020-06-26T15:58:01.201Z"
    },
    {
      "id": 1819,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "xkC1QT",
      "type": "stream_like",
      "activity_type": "like",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [],
      "createdAt": "2020-06-23T07:13:40.095Z",
      "updatedAt": "2020-06-23T09:14:49.709Z"
    },
    {
      "id": 1826,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "HMNDUg",
      "type": "stream_like",
      "activity_type": "like",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [
        391
      ],
      "createdAt": "2020-06-23T08:53:23.304Z",
      "updatedAt": "2020-06-23T08:53:24.687Z"
    },
    {
      "id": 1816,
      "data": {
        "isread": false,
        "deleted": false
      },
      "subject_id": "HMNDUg",
      "type": "stream_like",
      "activity_type": "like",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": null,
      "actors": [],
      "createdAt": "2020-06-23T07:12:49.056Z",
      "updatedAt": "2020-06-23T08:53:23.739Z"
    },
    {
      "id": 1727,
      "data": {
        "isread": false,
        "deleted": false,
        "share_id": 3
      },
      "subject_id": "gChzBq",
      "type": "stream_share",
      "activity_type": "share",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2020-03-14T13:41:31.279Z",
      "updatedAt": "2020-06-08T12:05:10.057Z"
    },
    {
      "id": 1775,
      "data": {
        "isread": false,
        "deleted": false,
        "share_id": 7
      },
      "subject_id": "UQebQs",
      "type": "stream_share",
      "activity_type": "share",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2020-04-07T10:40:38.498Z",
      "updatedAt": "2020-06-05T16:06:15.657Z"
    },
    {
      "id": 1728,
      "data": {
        "isread": false,
        "deleted": false,
        "share_id": 4
      },
      "subject_id": "w3PPVS",
      "type": "stream_share",
      "activity_type": "share",
      "receipent": {
        "type": "p",
        "user": {
          "406": false
        }
      },
      "actor": 391,
      "actors": null,
      "createdAt": "2020-03-14T13:41:44.741Z",
      "updatedAt": "2020-04-25T09:28:05.271Z"
    }]

    let mediaRemovedKey=['tcSc64','UgiWH0']
_.remove(notification,n=>{
    if(n.type=='media_create' && mediaRemovedKey.includes(n.subject_id)){
        return n;
    }
})

console.log(notification)
