export const StatusColor = Object.freeze({
    CLEAR: 'clear' as 'clear',
    SUCCESS: 'success' as 'success',
    INPROGRESS: 'inprogress' as 'inprogress',
    IN_PROGRESS: 'in progress' as 'in progress',
    NOTDISCOVERED: 'notdiscovered' as 'notdiscovered',
    WARNING: 'warning' as 'warning',
    DEFINED: 'defined' as 'defined',
    CRITICAL: 'critical' as 'critical',
    ERROR: 'error' as 'error',
    OPEN: 'open' as 'open',
    FAILED: 'failed' as 'failed',
    // state
    OK: 'ok' as 'ok',
    UP: 'up' as 'up',
    DOWN: 'down' as 'down',
    ACTIVE: 'active' as 'active',
    INACTIVE: 'inactive' as 'inactive',
    GOOD: 'good' as 'good'
})
export enum StatusCodes {
    Defined = 1,
    Configured = 2,
    InProgress = 3,
    Success = 4,
    Failed = 5,
    Paused = 6,
}

export enum StatusColors {
    Defined = '#4a586b',
    Configured = '#0e2b4d',
    InProgress = '#63bdeb',
    Success = '#4b9a7d',
    Failed = '#ff4743',
    Paused = '#ffba5b',
}