var APP_DATA = {
  "scenes": [
    {
      "id": "0-dinning",
      "name": "Dinning",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5616519578843953,
          "pitch": 0.20603653841046743,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.144503708735778,
          "pitch": 0.05394196254123784,
          "rotation": 0,
          "target": "0-dinning"
        },
        {
          "yaw": 2.3282750869768343,
          "pitch": 0.07616423073238465,
          "rotation": 1.5707963267948966,
          "target": "3-pooja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-hall",
      "name": "Living hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3051015974908786,
          "pitch": 0.1143842664821868,
          "rotation": 1.5707963267948966,
          "target": "4-foyer"
        },
        {
          "yaw": 1.176442333166225,
          "pitch": 0.11144140726655394,
          "rotation": 4.71238898038469,
          "target": "3-pooja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pooja",
      "name": "Pooja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2941333753424562,
          "pitch": 0.10468913464183949,
          "rotation": 0,
          "target": "4-foyer"
        },
        {
          "yaw": 1.450974016216115,
          "pitch": 0.10613380834404218,
          "rotation": 1.5707963267948966,
          "target": "2-living-hall"
        },
        {
          "yaw": -1.0284563787160366,
          "pitch": 0.07196836236333226,
          "rotation": 7.0685834705770345,
          "target": "0-dinning"
        },
        {
          "yaw": -1.2620160857119238,
          "pitch": 0.08968084035152302,
          "rotation": 10.995574287564278,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.02527443289514153,
        "pitch": 0.017962112280788034,
        "fov": 1.3825166222326657
      },
      "linkHotspots": [
        {
          "yaw": -1.76172312345372,
          "pitch": 0.08813643864479026,
          "rotation": 0,
          "target": "3-pooja"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mr.Karthik - INTERIOR - 360 - R0",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
