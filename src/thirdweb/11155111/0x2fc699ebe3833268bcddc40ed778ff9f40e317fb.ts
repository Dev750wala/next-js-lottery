import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract events
*/



/**
 * Creates an event object for the CoordinatorSet event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { coordinatorSetEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  coordinatorSetEvent()
 * ],
 * });
 * ```
 */
export function coordinatorSetEvent() {
  return prepareEvent({
    signature: "event CoordinatorSet(address vrfCoordinator)",
  });
};


/**
 * Represents the filters for the "OwnershipTransferRequested" event.
 */
export type OwnershipTransferRequestedEventFilters = Partial<{
  from: AbiParameterToPrimitiveType<{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }>
  to: AbiParameterToPrimitiveType<{ "indexed": true, "internalType": "address", "name": "to", "type": "address" }>
}>;

/**
 * Creates an event object for the OwnershipTransferRequested event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { ownershipTransferRequestedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  ownershipTransferRequestedEvent({
 *  from: ...,
 *  to: ...,
 * })
 * ],
 * });
 * ```
 */
export function ownershipTransferRequestedEvent(filters: OwnershipTransferRequestedEventFilters = {}) {
  return prepareEvent({
    signature: "event OwnershipTransferRequested(address indexed from, address indexed to)",
    filters,
  });
};


/**
 * Represents the filters for the "OwnershipTransferred" event.
 */
export type OwnershipTransferredEventFilters = Partial<{
  from: AbiParameterToPrimitiveType<{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }>
  to: AbiParameterToPrimitiveType<{ "indexed": true, "internalType": "address", "name": "to", "type": "address" }>
}>;

/**
 * Creates an event object for the OwnershipTransferred event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { ownershipTransferredEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  ownershipTransferredEvent({
 *  from: ...,
 *  to: ...,
 * })
 * ],
 * });
 * ```
 */
export function ownershipTransferredEvent(filters: OwnershipTransferredEventFilters = {}) {
  return prepareEvent({
    signature: "event OwnershipTransferred(address indexed from, address indexed to)",
    filters,
  });
};


/**
 * Represents the filters for the "RaffleEnter" event.
 */
export type RaffleEnterEventFilters = Partial<{
  player: AbiParameterToPrimitiveType<{ "indexed": true, "internalType": "address", "name": "player", "type": "address" }>
}>;

/**
 * Creates an event object for the RaffleEnter event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { raffleEnterEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  raffleEnterEvent({
 *  player: ...,
 * })
 * ],
 * });
 * ```
 */
export function raffleEnterEvent(filters: RaffleEnterEventFilters = {}) {
  return prepareEvent({
    signature: "event RaffleEnter(address indexed player)",
    filters,
  });
};




/**
 * Creates an event object for the RequestFulfilled event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { requestFulfilledEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  requestFulfilledEvent()
 * ],
 * });
 * ```
 */
export function requestFulfilledEvent() {
  return prepareEvent({
    signature: "event RequestFulfilled(uint256 requestId, uint256[] randomWords)",
  });
};




/**
 * Creates an event object for the RequestSent event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { requestSentEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  requestSentEvent()
 * ],
 * });
 * ```
 */
export function requestSentEvent() {
  return prepareEvent({
    signature: "event RequestSent(uint256 requestId, uint32 numWords)",
  });
};


/**
 * Represents the filters for the "RequestedRaffleWinner" event.
 */
export type RequestedRaffleWinnerEventFilters = Partial<{
  requestId: AbiParameterToPrimitiveType<{ "indexed": true, "internalType": "uint256", "name": "requestId", "type": "uint256" }>
}>;

/**
 * Creates an event object for the RequestedRaffleWinner event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { requestedRaffleWinnerEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  requestedRaffleWinnerEvent({
 *  requestId: ...,
 * })
 * ],
 * });
 * ```
 */
export function requestedRaffleWinnerEvent(filters: RequestedRaffleWinnerEventFilters = {}) {
  return prepareEvent({
    signature: "event RequestedRaffleWinner(uint256 indexed requestId)",
    filters,
  });
};


/**
 * Represents the filters for the "WinnerPicked" event.
 */
export type WinnerPickedEventFilters = Partial<{
  player: AbiParameterToPrimitiveType<{ "indexed": true, "internalType": "address", "name": "player", "type": "address" }>
}>;

/**
 * Creates an event object for the WinnerPicked event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { winnerPickedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  winnerPickedEvent({
 *  player: ...,
 * })
 * ],
 * });
 * ```
 */
export function winnerPickedEvent(filters: WinnerPickedEventFilters = {}) {
  return prepareEvent({
    signature: "event WinnerPicked(address indexed player)",
    filters,
  });
};


/**
* Contract read functions
*/



/**
 * Calls the "callbackGasLimit" function on the contract.
 * @param options - The options for the callbackGasLimit function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { callbackGasLimit } from "TODO";
 *
 * const result = await callbackGasLimit();
 *
 * ```
 */
export async function callbackGasLimit(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x24f74697",
      [],
      [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ]
    ],
    params: []
  });
};


/**
 * Represents the parameters for the "checkUpkeep" function.
 */
export type CheckUpkeepParams = {
  arg_0: AbiParameterToPrimitiveType<{ "internalType": "bytes", "name": "", "type": "bytes" }>
};

/**
 * Calls the "checkUpkeep" function on the contract.
 * @param options - The options for the checkUpkeep function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { checkUpkeep } from "TODO";
 *
 * const result = await checkUpkeep({
 *  arg_0: ...,
 * });
 *
 * ```
 */
export async function checkUpkeep(
  options: BaseTransactionOptions<CheckUpkeepParams>
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x6e04ff0d",
      [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      [
        {
          "internalType": "bool",
          "name": "upkeepNeeded",
          "type": "bool"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ]
    ],
    params: [options.arg_0]
  });
};




/**
 * Calls the "getEntranceFee" function on the contract.
 * @param options - The options for the getEntranceFee function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getEntranceFee } from "TODO";
 *
 * const result = await getEntranceFee();
 *
 * ```
 */
export async function getEntranceFee(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x09bc33a7",
      [],
      [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ]
    ],
    params: []
  });
};




/**
 * Calls the "getInterval" function on the contract.
 * @param options - The options for the getInterval function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getInterval } from "TODO";
 *
 * const result = await getInterval();
 *
 * ```
 */
export async function getInterval(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x91ad27b4",
      [],
      [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ]
    ],
    params: []
  });
};




/**
 * Calls the "getLastTimeStamp" function on the contract.
 * @param options - The options for the getLastTimeStamp function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getLastTimeStamp } from "TODO";
 *
 * const result = await getLastTimeStamp();
 *
 * ```
 */
export async function getLastTimeStamp(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0xc1c244e8",
      [],
      [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ]
    ],
    params: []
  });
};




/**
 * Calls the "getNumberOfPlayers" function on the contract.
 * @param options - The options for the getNumberOfPlayers function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getNumberOfPlayers } from "TODO";
 *
 * const result = await getNumberOfPlayers();
 *
 * ```
 */
export async function getNumberOfPlayers(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0xfd6673f5",
      [],
      [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ]
    ],
    params: []
  });
};


/**
 * Represents the parameters for the "getPlayer" function.
 */
export type GetPlayerParams = {
  index: AbiParameterToPrimitiveType<{ "internalType": "uint256", "name": "index", "type": "uint256" }>
};

/**
 * Calls the "getPlayer" function on the contract.
 * @param options - The options for the getPlayer function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getPlayer } from "TODO";
 *
 * const result = await getPlayer({
 *  index: ...,
 * });
 *
 * ```
 */
export async function getPlayer(
  options: BaseTransactionOptions<GetPlayerParams>
) {
  return readContract({
    contract: options.contract,
    method: [
      "0xe55ae4e8",
      [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ]
    ],
    params: [options.index]
  });
};




/**
 * Calls the "getRaffleState" function on the contract.
 * @param options - The options for the getRaffleState function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRaffleState } from "TODO";
 *
 * const result = await getRaffleState();
 *
 * ```
 */
export async function getRaffleState(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x115cbaf5",
      [],
      [
        {
          "internalType": "enum Raffle.RaffleState",
          "name": "",
          "type": "uint8"
        }
      ]
    ],
    params: []
  });
};




/**
 * Calls the "getRecentWinner" function on the contract.
 * @param options - The options for the getRecentWinner function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRecentWinner } from "TODO";
 *
 * const result = await getRecentWinner();
 *
 * ```
 */
export async function getRecentWinner(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x473f1ddc",
      [],
      [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ]
    ],
    params: []
  });
};




/**
 * Calls the "getRequestConfirmations" function on the contract.
 * @param options - The options for the getRequestConfirmations function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRequestConfirmations } from "TODO";
 *
 * const result = await getRequestConfirmations();
 *
 * ```
 */
export async function getRequestConfirmations(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x5f1b0fd8",
      [],
      [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ]
    ],
    params: []
  });
};




/**
 * Calls the "keyHash" function on the contract.
 * @param options - The options for the keyHash function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { keyHash } from "TODO";
 *
 * const result = await keyHash();
 *
 * ```
 */
export async function keyHash(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x61728f39",
      [],
      [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ]
    ],
    params: []
  });
};




/**
 * Calls the "lastRequestId" function on the contract.
 * @param options - The options for the lastRequestId function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { lastRequestId } from "TODO";
 *
 * const result = await lastRequestId();
 *
 * ```
 */
export async function lastRequestId(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0xfc2a88c3",
      [],
      [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ]
    ],
    params: []
  });
};




/**
 * Calls the "numWords" function on the contract.
 * @param options - The options for the numWords function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { numWords } from "TODO";
 *
 * const result = await numWords();
 *
 * ```
 */
export async function numWords(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x7ccfd7fc",
      [],
      [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ]
    ],
    params: []
  });
};




/**
 * Calls the "owner" function on the contract.
 * @param options - The options for the owner function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { owner } from "TODO";
 *
 * const result = await owner();
 *
 * ```
 */
export async function owner(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x8da5cb5b",
      [],
      [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ]
    ],
    params: []
  });
};


/**
 * Represents the parameters for the "requestIds" function.
 */
export type RequestIdsParams = {
  arg_0: AbiParameterToPrimitiveType<{ "internalType": "uint256", "name": "", "type": "uint256" }>
};

/**
 * Calls the "requestIds" function on the contract.
 * @param options - The options for the requestIds function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { requestIds } from "TODO";
 *
 * const result = await requestIds({
 *  arg_0: ...,
 * });
 *
 * ```
 */
export async function requestIds(
  options: BaseTransactionOptions<RequestIdsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x8796ba8c",
      [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ]
    ],
    params: [options.arg_0]
  });
};


/**
 * Represents the parameters for the "s_requests" function.
 */
export type S_requestsParams = {
  arg_0: AbiParameterToPrimitiveType<{ "internalType": "uint256", "name": "", "type": "uint256" }>
};

/**
 * Calls the "s_requests" function on the contract.
 * @param options - The options for the s_requests function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { s_requests } from "TODO";
 *
 * const result = await s_requests({
 *  arg_0: ...,
 * });
 *
 * ```
 */
export async function s_requests(
  options: BaseTransactionOptions<S_requestsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
      "0xa168fa89",
      [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      [
        {
          "internalType": "bool",
          "name": "fulfilled",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "exists",
          "type": "bool"
        }
      ]
    ],
    params: [options.arg_0]
  });
};




/**
 * Calls the "s_subscriptionId" function on the contract.
 * @param options - The options for the s_subscriptionId function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { s_subscriptionId } from "TODO";
 *
 * const result = await s_subscriptionId();
 *
 * ```
 */
export async function s_subscriptionId(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x8ac00021",
      [],
      [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ]
    ],
    params: []
  });
};




/**
 * Calls the "s_vrfCoordinator" function on the contract.
 * @param options - The options for the s_vrfCoordinator function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { s_vrfCoordinator } from "TODO";
 *
 * const result = await s_vrfCoordinator();
 *
 * ```
 */
export async function s_vrfCoordinator(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
      "0x9eccacf6",
      [],
      [
        {
          "internalType": "contract IVRFCoordinatorV2Plus",
          "name": "",
          "type": "address"
        }
      ]
    ],
    params: []
  });
};


/**
* Contract write functions
*/



/**
 * Calls the "acceptOwnership" function on the contract.
 * @param options - The options for the "acceptOwnership" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { acceptOwnership } from "TODO";
 *
 * const transaction = acceptOwnership();
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function acceptOwnership(
  options: BaseTransactionOptions
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0x79ba5097",
      [],
      []
    ],
    params: []
  });
};




/**
 * Calls the "enterRaffle" function on the contract.
 * @param options - The options for the "enterRaffle" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { enterRaffle } from "TODO";
 *
 * const transaction = enterRaffle();
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export interface BaseTransactionOptionsUpdated extends BaseTransactionOptions {
  raffleAmountByPlayer: Promise<bigint>;
}
export async function enterRaffle(
  options: BaseTransactionOptionsUpdated
) {
  return prepareContractCall({
    contract: options.contract,
    value: await options.raffleAmountByPlayer,
    // value() {
    //   return options.raffleAmountByPlayer;
    // },
    method: [
      "0x2cfcc539",
      [],
      []
    ],
    params: []
  });
};


/**
 * Represents the parameters for the "performUpkeep" function.
 */
export type PerformUpkeepParams = {
  performData: AbiParameterToPrimitiveType<{ "internalType": "bytes", "name": "performData", "type": "bytes" }>
};

/**
 * Calls the "performUpkeep" function on the contract.
 * @param options - The options for the "performUpkeep" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { performUpkeep } from "TODO";
 *
 * const transaction = performUpkeep({
 *  performData: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function performUpkeep(
  options: BaseTransactionOptions<PerformUpkeepParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0x4585e33b",
      [
        {
          "internalType": "bytes",
          "name": "performData",
          "type": "bytes"
        }
      ],
      []
    ],
    params: [options.performData]
  });
};


/**
 * Represents the parameters for the "rawFulfillRandomWords" function.
 */
export type RawFulfillRandomWordsParams = {
  requestId: AbiParameterToPrimitiveType<{ "internalType": "uint256", "name": "requestId", "type": "uint256" }>
  randomWords: AbiParameterToPrimitiveType<{ "internalType": "uint256[]", "name": "randomWords", "type": "uint256[]" }>
};

/**
 * Calls the "rawFulfillRandomWords" function on the contract.
 * @param options - The options for the "rawFulfillRandomWords" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { rawFulfillRandomWords } from "TODO";
 *
 * const transaction = rawFulfillRandomWords({
 *  requestId: ...,
 *  randomWords: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function rawFulfillRandomWords(
  options: BaseTransactionOptions<RawFulfillRandomWordsParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0x1fe543e3",
      [
        {
          "internalType": "uint256",
          "name": "requestId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "randomWords",
          "type": "uint256[]"
        }
      ],
      []
    ],
    params: [options.requestId, options.randomWords]
  });
};


/**
 * Represents the parameters for the "setCoordinator" function.
 */
export type SetCoordinatorParams = {
  vrfCoordinator: AbiParameterToPrimitiveType<{ "internalType": "address", "name": "_vrfCoordinator", "type": "address" }>
};

/**
 * Calls the "setCoordinator" function on the contract.
 * @param options - The options for the "setCoordinator" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setCoordinator } from "TODO";
 *
 * const transaction = setCoordinator({
 *  vrfCoordinator: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function setCoordinator(
  options: BaseTransactionOptions<SetCoordinatorParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0x8ea98117",
      [
        {
          "internalType": "address",
          "name": "_vrfCoordinator",
          "type": "address"
        }
      ],
      []
    ],
    params: [options.vrfCoordinator]
  });
};


/**
 * Represents the parameters for the "transferOwnership" function.
 */
export type TransferOwnershipParams = {
  to: AbiParameterToPrimitiveType<{ "internalType": "address", "name": "to", "type": "address" }>
};

/**
 * Calls the "transferOwnership" function on the contract.
 * @param options - The options for the "transferOwnership" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transferOwnership } from "TODO";
 *
 * const transaction = transferOwnership({
 *  to: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function transferOwnership(
  options: BaseTransactionOptions<TransferOwnershipParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
      "0xf2fde38b",
      [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      []
    ],
    params: [options.to]
  });
};


