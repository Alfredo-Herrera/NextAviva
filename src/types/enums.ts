export enum CallSessionStatus {
  Requested,
  Queued,
  Assigned,
  Accepted,
  CancelledbyUser,
  CancelledbyAgent,
  Interrupted,
  Terminated,
  Error,
  Resumed,
  Paused,
}

export enum CallPartyType {
  None,
  Agent,
  Customer,
  Other,
}

export enum MaskType {
  Default = 0,
  ID = 1,
  Face = 2,
}

export enum DocumentType {
  Default = 0,
  IDFront = 1,
  IDReverse = 2,
  FacePhoto = 3,
}
