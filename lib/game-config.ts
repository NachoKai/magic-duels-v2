/**
 * Game configuration constants
 * Centralized configuration for easy adjustment
 */

/**
 * Time limit for drawing spells (in seconds)
 */
export const DRAWING_TIME_LIMIT = 5;

/**
 * Time threshold (in seconds) below which the timer shows a warning state
 * When time remaining is <= this value, the timer will display in red/warning color
 */
export const DRAWING_TIME_WARNING_THRESHOLD = 2;

/**
 * Strictness for gesture recognition (0.0 to 1.0)
 * Higher values require more precise drawing
 * 1.0 = Perfect match required
 */
export const DRAWING_VALIDATION_THRESHOLD = 0.85;
