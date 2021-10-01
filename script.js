(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_2D51B109_3BD6_A831_41A2_FD98543934B6], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_2FF4759C_3ABE_A857_41BC_E0B946317C06_playlist,this.mainPlayList]); this.playList_235BD341_3BDA_E82E_41C1_7A40A33CA497.set('selectedIndex', 0)",
 "vrPolyfillScale": 0.5,
 "children": [
  "this.MainViewer",
  "this.Container_2F17092C_3AB9_D876_41CB_D1D109BF0712",
  "this.IconButton_2D51B109_3BD6_A831_41A2_FD98543934B6"
 ],
 "id": "rootPlayer",
 "layout": "absolute",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": -32.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23085374_3BDA_E8D6_41CB_42CF18E56E3E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_2D51B109_3BD6_A831_41A2_FD98543934B6",
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_t.jpg",
 "label": "LIVING ROOM",
 "id": "panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8",
 "hfov": 360,
 "overlays": [
  "this.overlay_375CFAAB_3AD7_B871_41AC_2125F5EA3E79",
  "this.overlay_351C9B6E_3ACB_D8F2_41C7_91EC7F51868B"
 ],
 "mapLocations": [
  {
   "map": "this.map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62",
   "x": 1917.58,
   "class": "PanoramaMapLocation",
   "y": 1622.1,
   "angle": 95.49
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 98.28,
   "yaw": -112.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "202%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": -82.06,
  "class": "PanoramaCameraPosition",
  "pitch": -4.39
 },
 "id": "panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "camera": "this.panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_camera",
   "media": "this.panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_2FF4759C_3ABE_A857_41BC_E0B946317C06_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_camera",
   "media": "this.panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_2FF4759C_3ABE_A857_41BC_E0B946317C06_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_camera",
   "media": "this.panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_2FF4759C_3ABE_A857_41BC_E0B946317C06_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_camera",
   "media": "this.panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_2FF4759C_3ABE_A857_41BC_E0B946317C06_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_camera",
   "media": "this.panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_2FF4759C_3ABE_A857_41BC_E0B946317C06_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_camera",
   "media": "this.panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_2FF4759C_3ABE_A857_41BC_E0B946317C06_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_camera",
   "media": "this.panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_2FF4759C_3ABE_A857_41BC_E0B946317C06_playlist, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "DropDown_2FF4759C_3ABE_A857_41BC_E0B946317C06_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": -20.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2EB54406_3BDA_E832_41C5_B2E04974F725",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": -1.51,
  "class": "PanoramaCameraPosition",
  "pitch": 3.63
 },
 "id": "panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_t.jpg",
 "label": "DINING HALL",
 "id": "panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3",
 "hfov": 360,
 "overlays": [
  "this.overlay_372F3427_3AD9_A872_41C2_F277730309BC",
  "this.overlay_34163B12_3ADA_7852_41C6_33DF1A512F29",
  "this.overlay_2A430DD6_3ADF_BBD3_4199_437CCFA4441A",
  "this.overlay_35CEE0B0_3ADE_686F_41C1_F40F6A4341C5",
  "this.overlay_350206DB_3ACB_A9D1_41BF_39C3C8F64562"
 ],
 "mapLocations": [
  {
   "map": "this.map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62",
   "x": 1840.63,
   "class": "PanoramaMapLocation",
   "y": 1171.2,
   "angle": 56.45
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2"
  },
  {
   "backwardYaw": -112.94,
   "yaw": 98.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8"
  },
  {
   "backwardYaw": 159.01,
   "yaw": 4.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5"
  },
  {
   "backwardYaw": -163.35,
   "yaw": -48.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "183%"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_235BD341_3BDA_E82E_41C1_7A40A33CA497",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": 17.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2324E358_3BDA_E8DE_41B9_BA28B6DC3595",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "thumbnailUrl": "media/map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62_t.png",
 "label": "GROUND FLOOR",
 "id": "map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62",
 "overlays": [
  "this.overlay_2A90891B_3AF9_B851_41AA_D605A919CC82",
  "this.overlay_2BAAAC26_3AFA_D872_41C7_A2E70C855C99",
  "this.overlay_2BC3FA03_3AFB_B832_41C6_CB5889283C28",
  "this.overlay_2B1F0B22_3AFB_D872_41CA_513DEEA81653"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "class": "Map",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62.png",
    "width": 4000,
    "class": "ImageResourceLevel",
    "height": 2250
   },
   {
    "url": "media/map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62_lq.png",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ]
 },
 "maximumZoomFactor": 1,
 "width": 4000,
 "fieldOfViewOverlayRadiusScale": 0.07,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 1,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 2250
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_t.jpg",
 "label": "UPSTAIR ENTRY HALL",
 "id": "panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2",
 "hfov": 360,
 "overlays": [
  "this.overlay_35BDBD0B_3ADA_5831_41CC_7EB2B96545C8",
  "this.overlay_29CD75D3_3ADB_EBD2_41C4_56521B4316A1",
  "this.overlay_2B93FE24_3ADA_7876_41A6_206A69300175"
 ],
 "mapLocations": [
  {
   "map": "this.map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86",
   "x": 1825.45,
   "class": "PanoramaMapLocation",
   "y": 1138.71,
   "angle": -31.87
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -162.91,
   "yaw": -151.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3"
  },
  {
   "backwardYaw": 147.3,
   "yaw": -7.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_235B4342_3BDA_E832_41C2_2C39972900D1",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2EB923EA_3BDA_EFF2_41C5_EA4C8D53EB54",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "thumbnailUrl": "media/map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86_t.png",
 "label": "FIRST FLOOR",
 "id": "map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86",
 "overlays": [
  "this.overlay_2B1135FB_3AFA_ABD2_41C4_0D9275190F58",
  "this.overlay_286CE5D2_3AFA_6BD2_41B2_B3291919C10B",
  "this.overlay_286010BC_3AF6_6856_41CB_5DA97955DC91"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "class": "Map",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86.png",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1800
   },
   {
    "url": "media/map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86_lq.png",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ]
 },
 "maximumZoomFactor": 1,
 "width": 4000,
 "fieldOfViewOverlayRadiusScale": 0.05,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 1,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 2250
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_t.jpg",
 "label": "UPSTAIR ROOM 1",
 "id": "panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06",
 "hfov": 360,
 "overlays": [
  "this.overlay_3543003C_3AD7_A856_41CB_804F45D60B27",
  "this.overlay_350296E3_3ACA_A9F2_41C6_7D002D3F1D82"
 ],
 "mapLocations": [
  {
   "map": "this.map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86",
   "x": 1700.49,
   "class": "PanoramaMapLocation",
   "y": 1612.05,
   "angle": 181.87
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -151.08,
   "yaw": -162.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": 28.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2EAE63C1_3BDA_E82E_41BD_5C812278F4AE",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": 172.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2E859421_3BDA_E86E_41B3_59DD137716E5",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": 67.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2EBEF3F8_3BDA_EFDE_41C1_ADD12FCF45B5",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": -48.32,
  "class": "PanoramaCameraPosition",
  "pitch": 7.66
 },
 "id": "camera_233D9366_3BDA_E8F2_41B3_B8CD62247918",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_235B1342_3BDA_E832_41CA_F391D4E06B1F",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_235B3342_3BDA_E832_41C0_2C79860EF984",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": -175.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2EA2D3CF_3BDA_E832_4192_0475BBDB3692",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": 16.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2E8CC414_3BDA_E856_41CB_5B04EAE33773",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_t.jpg",
 "label": "UPSTAIR ROOM 2",
 "id": "panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80",
 "hfov": 360,
 "overlays": [
  "this.overlay_3531E4B6_3AC9_A852_41C1_D6FBADF20EB5",
  "this.overlay_2AE268F2_3ACE_59D2_41B3_2F3A756A4866"
 ],
 "mapLocations": [
  {
   "map": "this.map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86",
   "x": 1707.27,
   "class": "PanoramaMapLocation",
   "y": 568.83,
   "angle": 0
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -7.48,
   "yaw": 147.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_t.jpg",
 "label": "KITCHEN",
 "id": "panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53",
 "hfov": 360,
 "overlays": [
  "this.overlay_3514CAFD_3ACA_59D6_4186_2E6A4DC2F94D",
  "this.overlay_2ED61BBC_3BCE_5856_41AD_3A5106FEBC64"
 ],
 "mapLocations": [
  {
   "map": "this.map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62",
   "x": 1913.17,
   "class": "PanoramaMapLocation",
   "y": 745.15,
   "angle": 10.98
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -48.88,
   "yaw": -163.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_t.jpg",
 "label": "GROUND FLOOR BED ROOM 1",
 "id": "panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5",
 "hfov": 360,
 "overlays": [
  "this.overlay_350875AC_3ACA_A876_41CD_13F1B8F2E2E3",
  "this.overlay_23EB2773_3BCA_E8D2_41C7_E1372DEAF75F"
 ],
 "mapLocations": [
  {
   "map": "this.map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62",
   "x": 2248.24,
   "class": "PanoramaMapLocation",
   "y": 826.11,
   "angle": 33.69
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 4.7,
   "yaw": 159.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "hfovMin": "150%"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": 131.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2E9F442F_3BDA_E872_41CA_56104FF2140E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": -81.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2EA4E3DC_3BDA_EFD6_41CD_14CFDC0EB096",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  "this.PanoramaPlayListItem_235C4342_3BDA_E832_41A5_C66149559022",
  "this.PanoramaPlayListItem_235D1342_3BDA_E832_419A_369557B6B5BF",
  "this.PanoramaPlayListItem_235EF343_3BDA_E832_41AB_5A5F17C1F7B3",
  "this.PanoramaPlayListItem_235E4343_3BDA_E832_4188_7BDFC2F0AA98",
  "this.PanoramaPlayListItem_235F1343_3BDA_E832_41C4_41F172CCBED6",
  "this.PanoramaPlayListItem_2350E344_3BDA_E836_41CB_EE6B21C30116",
  "this.PanoramaPlayListItem_2351B344_3BDA_E836_41B6_0643D7B23106"
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "manualRotationSpeed": 912,
 "initialPosition": {
  "yaw": -48.32,
  "class": "PanoramaCameraPosition",
  "pitch": 7.66
 },
 "id": "panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "children": [
  "this.MapViewer",
  "this.DropDown_2FF4759C_3ABE_A857_41BC_E0B946317C06"
 ],
 "id": "Container_2F17092C_3AB9_D876_41CB_D1D109BF0712",
 "left": "28.82%",
 "backgroundOpacity": 0.3,
 "width": 168.2,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "23.15%",
 "height": 318.4,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "Container24822"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "IconButton_2D51B109_3BD6_A831_41A2_FD98543934B6",
 "backgroundOpacity": 0,
 "width": 70,
 "paddingBottom": 0,
 "right": "2.32%",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "4.86%",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 70,
 "class": "IconButton",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton12329"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2D51B109_3BD6_A831_41A2_FD98543934B6.png",
 "cursor": "hand"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3, this.camera_2EA4E3DC_3BDA_EFD6_41CD_14CFDC0EB096); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2FB1C332_3ACB_A853_41BB_EAB603C440B7",
   "yaw": -112.94,
   "pitch": -40.41,
   "distance": 100,
   "hfov": 25.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.77,
   "yaw": -112.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.41
  }
 ],
 "id": "overlay_375CFAAB_3AD7_B871_41AC_2125F5EA3E79",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": 70.11,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 51.84,
 "bleaching": 0.7,
 "id": "overlay_351C9B6E_3ACB_D8F2_41C7_91EC7F51868B"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_2EB923EA_3BDA_EFF2_41C5_EA4C8D53EB54, this.panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3); this.startPanoramaWithCamera(this.panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2, this.camera_2EB923EA_3BDA_EFF2_41C5_EA4C8D53EB54); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2FB24337_3ACB_A851_41C8_C18285131E05",
   "yaw": 54.14,
   "pitch": -31.54,
   "distance": 50,
   "hfov": 23.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.78,
   "yaw": 54.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.54
  }
 ],
 "id": "overlay_372F3427_3AD9_A872_41C2_F277730309BC",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8, this.camera_2EBEF3F8_3BDA_EFDE_41C1_ADD12FCF45B5); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2FB20337_3ACB_A851_41C7_0DE2A5122B13",
   "yaw": 98.28,
   "pitch": -36.53,
   "distance": 100,
   "hfov": 21.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.24,
   "yaw": 98.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.53
  }
 ],
 "id": "overlay_34163B12_3ADA_7852_41C6_33DF1A512F29",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53, this.camera_2E8CC414_3BDA_E856_41CB_5B04EAE33773); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2FB2F337_3ACB_A851_41C5_2B981E127120",
   "yaw": -48.88,
   "pitch": -50.36,
   "distance": 50,
   "hfov": 30.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.41,
   "yaw": -48.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -50.36
  }
 ],
 "id": "overlay_2A430DD6_3ADF_BBD3_4199_437CCFA4441A",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5, this.camera_2EB54406_3BDA_E832_41C5_B2E04974F725); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2FB2B338_3ACB_A85F_41B5_1D53C7C08844",
   "yaw": 4.7,
   "pitch": -26.05,
   "distance": 50,
   "hfov": 21.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.62,
   "yaw": 4.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.05
  }
 ],
 "id": "overlay_35CEE0B0_3ADE_686F_41C1_F40F6A4341C5",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -106.7,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 66.66,
 "bleaching": 0.7,
 "id": "overlay_350206DB_3ACB_A9D1_41BF_39C3C8F64562"
},
{
 "map": {
  "width": 454,
  "x": 1690.58,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62_HS_0_map.gif",
     "width": 21,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1452.1,
  "offsetY": 0,
  "height": 340,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1690.58,
  "y": 1452.1,
  "width": 454,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62_HS_0.png",
     "width": 363,
     "class": "ImageResourceLevel",
     "height": 272
    }
   ]
  },
  "height": 340
 },
 "useHandCursor": true,
 "id": "overlay_2A90891B_3AF9_B851_41AA_D605A919CC82",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 454,
  "x": 1613.63,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62_HS_1_map.gif",
     "width": 21,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1001.2,
  "offsetY": 0,
  "height": 340,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1613.63,
  "y": 1001.2,
  "width": 454,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62_HS_1.png",
     "width": 363,
     "class": "ImageResourceLevel",
     "height": 272
    }
   ]
  },
  "height": 340
 },
 "useHandCursor": true,
 "id": "overlay_2BAAAC26_3AFA_D872_41C7_A2E70C855C99",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 454,
  "x": 1686.17,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62_HS_2_map.gif",
     "width": 21,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 575.15,
  "offsetY": 0,
  "height": 340,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1686.17,
  "y": 575.15,
  "width": 454,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62_HS_2.png",
     "width": 363,
     "class": "ImageResourceLevel",
     "height": 272
    }
   ]
  },
  "height": 340
 },
 "useHandCursor": true,
 "id": "overlay_2BC3FA03_3AFB_B832_41C6_CB5889283C28",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 454,
  "x": 2021.24,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62_HS_3_map.gif",
     "width": 21,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 656.11,
  "offsetY": 0,
  "height": 340,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 2021.24,
  "y": 656.11,
  "width": 454,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A1BC769_3ACA_A8FE_41C2_6E97E63E0F62_HS_3.png",
     "width": 363,
     "class": "ImageResourceLevel",
     "height": 272
    }
   ]
  },
  "height": 340
 },
 "useHandCursor": true,
 "id": "overlay_2B1F0B22_3AFB_D872_41CA_513DEEA81653",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_233D9366_3BDA_E8F2_41B3_B8CD62247918, this.panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2); this.startPanoramaWithCamera(this.panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3, this.camera_233D9366_3BDA_E8F2_41B3_B8CD62247918); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2FBDC33E_3ACB_A853_41C7_6C38F5BF1750",
   "yaw": 57.64,
   "pitch": -47.39,
   "distance": 50,
   "hfov": 34.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 34.48,
   "yaw": 57.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_1_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.39
  }
 ],
 "id": "overlay_35BDBD0B_3ADA_5831_41CC_7EB2B96545C8",
 "data": {
  "label": "Arrow 06c Right-Up"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06, this.camera_2324E358_3BDA_E8DE_41B9_BA28B6DC3595); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2FBDB33E_3ACB_A853_41C9_55B957780488",
   "yaw": -151.08,
   "pitch": -57.04,
   "distance": 50,
   "hfov": 19.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.52,
   "yaw": -151.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -57.04
  }
 ],
 "id": "overlay_29CD75D3_3ADB_EBD2_41C4_56521B4316A1",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80, this.camera_23085374_3BDA_E8D6_41CB_42CF18E56E3E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2FBC633E_3ACB_A853_41C1_2DF5EBDC6854",
   "yaw": -7.48,
   "pitch": -48.23,
   "distance": 100,
   "hfov": 19.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.62,
   "yaw": -7.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -48.23
  }
 ],
 "id": "overlay_2B93FE24_3ADA_7876_41A6_206A69300175",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "width": "99.881%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "minWidth": 1,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "92.792%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "bottom": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "map": {
  "width": 454,
  "x": 1598.45,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86_HS_0_map.gif",
     "width": 21,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 968.71,
  "offsetY": 0,
  "height": 340,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1598.45,
  "y": 968.71,
  "width": 454,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86_HS_0.png",
     "width": 363,
     "class": "ImageResourceLevel",
     "height": 272
    }
   ]
  },
  "height": 340
 },
 "useHandCursor": true,
 "id": "overlay_2B1135FB_3AFA_ABD2_41C4_0D9275190F58",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 454,
  "x": 1480.27,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86_HS_1_map.gif",
     "width": 21,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 398.83,
  "offsetY": 0,
  "height": 340,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1480.27,
  "y": 398.83,
  "width": 454,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86_HS_1.png",
     "width": 363,
     "class": "ImageResourceLevel",
     "height": 272
    }
   ]
  },
  "height": 340
 },
 "useHandCursor": true,
 "id": "overlay_286CE5D2_3AFA_6BD2_41B2_B3291919C10B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 507.68,
  "x": 1446.65,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86_HS_2_map.gif",
     "width": 23,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1439.07,
  "offsetY": 0,
  "height": 345.97,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1446.65,
  "y": 1439.07,
  "width": 507.68,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2A8569DA_3ACA_BBD2_41CD_61B6DB539C86_HS_2.png",
     "width": 406,
     "class": "ImageResourceLevel",
     "height": 276
    }
   ]
  },
  "height": 345.97
 },
 "useHandCursor": true,
 "id": "overlay_286010BC_3AF6_6856_41CB_5DA97955DC91",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2, this.camera_2EAE63C1_3BDA_E82E_41BD_5C812278F4AE); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2FBC233E_3ACB_A853_41C8_9C0F45F8AD0B",
   "yaw": -162.91,
   "pitch": -46.64,
   "distance": 50,
   "hfov": 23.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.87,
   "yaw": -162.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -46.64
  }
 ],
 "id": "overlay_3543003C_3AD7_A856_41CB_804F45D60B27",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.69,
 "yaw": -140.19,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 77.92,
 "bleaching": 0.7,
 "id": "overlay_350296E3_3ACA_A9F2_41C6_7D002D3F1D82"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2, this.camera_2E859421_3BDA_E86E_41B3_59DD137716E5); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2FBCB33F_3ACB_A851_41B6_EFD90AE1AB26",
   "yaw": 147.3,
   "pitch": -33.13,
   "distance": 100,
   "hfov": 25.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.81,
   "yaw": 147.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.13
  }
 ],
 "id": "overlay_3531E4B6_3AC9_A852_41C1_D6FBADF20EB5",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.53,
 "yaw": 35.79,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 63.37,
 "bleaching": 0.81,
 "id": "overlay_2AE268F2_3ACE_59D2_41B3_2F3A756A4866"
},
{
 "bleachingDistance": 0.4,
 "yaw": -42.73,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 67.76,
 "bleaching": 0.7,
 "id": "overlay_3514CAFD_3ACA_59D6_4186_2E6A4DC2F94D"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3, this.camera_2E9F442F_3BDA_E872_41CA_56104FF2140E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_22B43BB8_3BCE_D85E_41A1_0AC5D05CD934",
   "yaw": -163.35,
   "pitch": -41.23,
   "distance": 100,
   "hfov": 21.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.74,
   "yaw": -163.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.23
  }
 ],
 "id": "overlay_2ED61BBC_3BCE_5856_41AD_3A5106FEBC64",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.42,
 "yaw": -140.19,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 83.14,
 "bleaching": 0.7,
 "id": "overlay_350875AC_3ACA_A876_41CD_13F1B8F2E2E3"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3, this.camera_2EA2D3CF_3BDA_E832_4192_0475BBDB3692); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2EFCECD7_3BCB_D9D1_41AA_C45E77D53487",
   "yaw": 159.01,
   "pitch": -63.47,
   "distance": 100,
   "hfov": 26.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.4,
   "yaw": 159.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -63.47
  }
 ],
 "id": "overlay_23EB2773_3BCA_E8D2_41C7_E1372DEAF75F",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "camera": "this.panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_camera",
 "media": "this.panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_235C4342_3BDA_E832_41A5_C66149559022, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_235C4342_3BDA_E832_41A5_C66149559022"
},
{
 "camera": "this.panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_camera",
 "media": "this.panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_235D1342_3BDA_E832_419A_369557B6B5BF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_235D1342_3BDA_E832_419A_369557B6B5BF"
},
{
 "camera": "this.panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_camera",
 "media": "this.panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_235EF343_3BDA_E832_41AB_5A5F17C1F7B3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_235EF343_3BDA_E832_41AB_5A5F17C1F7B3"
},
{
 "camera": "this.panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_camera",
 "media": "this.panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_235E4343_3BDA_E832_4188_7BDFC2F0AA98, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_235E4343_3BDA_E832_4188_7BDFC2F0AA98"
},
{
 "camera": "this.panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_camera",
 "media": "this.panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_235F1343_3BDA_E832_41C4_41F172CCBED6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_235F1343_3BDA_E832_41C4_41F172CCBED6"
},
{
 "camera": "this.panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_camera",
 "media": "this.panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2350E344_3BDA_E836_41CB_EE6B21C30116, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2350E344_3BDA_E836_41CB_EE6B21C30116"
},
{
 "camera": "this.panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_camera",
 "media": "this.panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80",
 "end": "this.trigger('tourEnded')",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_2351B344_3BDA_E836_41B6_0643D7B23106, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 0)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_2351B344_3BDA_E836_41B6_0643D7B23106"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "popUpShadowOpacity": 0,
 "popUpShadowBlurRadius": 6,
 "arrowColor": "#FFFFFF",
 "id": "DropDown_2FF4759C_3ABE_A857_41BC_E0B946317C06",
 "left": "0%",
 "popUpShadowColor": "#000000",
 "backgroundOpacity": 0.9,
 "playList": "this.DropDown_2FF4759C_3ABE_A857_41BC_E0B946317C06_playlist",
 "paddingBottom": 0,
 "right": "0%",
 "popUpFontColor": "#000000",
 "borderRadius": 0,
 "paddingRight": 5,
 "popUpShadowSpread": 1,
 "paddingLeft": 5,
 "borderSize": 0,
 "rollOverPopUpBackgroundColor": "#FFFFFF",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "arrowBeforeLabel": false,
 "popUpBackgroundColor": "#FFFFFF",
 "bottom": "92.1%",
 "popUpGap": 0,
 "minWidth": 1,
 "selectedPopUpBackgroundColor": "#333333",
 "backgroundColor": [
  "#666666"
 ],
 "fontSize": 14,
 "popUpBorderRadius": 0,
 "gap": 0,
 "popUpBackgroundOpacity": 0.9,
 "backgroundColorDirection": "vertical",
 "class": "DropDown",
 "fontColor": "#FFFFFF",
 "selectedPopUpFontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpShadow": false,
 "paddingTop": 0,
 "data": {
  "name": "DropDown1204"
 },
 "shadow": false,
 "fontWeight": "normal"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_2FB1C332_3ACB_A853_41BB_EAB603C440B7",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30F63F0D_3ABE_B831_41B7_4BD490A18FB8_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_2FB24337_3ACB_A851_41C8_C18285131E05",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_2FB20337_3ACB_A851_41C7_0DE2A5122B13",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_2FB2F337_3ACB_A851_41C5_2B981E127120",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_2FB2B338_3ACB_A85F_41B5_1D53C7C08844",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3084EFC9_3AB9_D831_41B7_BA8BA57271A3_1_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_2FBDC33E_3ACB_A853_41C7_6C38F5BF1750",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_2FBDB33E_3ACB_A853_41C9_55B957780488",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_2FBC633E_3ACB_A853_41C1_2DF5EBDC6854",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30EAE0EA_3ABE_69F2_41C5_7BB1074921D2_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_2FBC233E_3ACB_A853_41C8_9C0F45F8AD0B",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30F77BCE_3ABE_F832_41A1_8618CC79AB06_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_2FBCB33F_3ACB_A851_41B6_EFD90AE1AB26",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30F12432_3ABE_A852_41A3_F4370EBE1D80_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_22B43BB8_3BCE_D85E_41A1_0AC5D05CD934",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30F6C6F1_3ABE_69EE_4181_B0335349CD53_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_2EFCECD7_3BCB_D9D1_41AA_C45E77D53487",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_308F1D68_3ABE_58FF_41BB_E3B8278EE7A5_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6
}],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "class": "Player",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "unregisterKey": function(key){  delete window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getKey": function(key){  return window[key]; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){  return key in window; },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "data": {
  "name": "Player471"
 },
 "shadow": false,
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
