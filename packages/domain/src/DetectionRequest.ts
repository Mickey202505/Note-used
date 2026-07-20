import type { ImageSource } from "./ImageSource";

/**
 * Represents a request to detect a feature within an image.
 */
export interface DetectionRequest {
  /**
   * The image to analyse.
   */
  readonly image: ImageSource;

  /**
   * The type of feature to detect.
   * Example: "building", "tree", "bunker"
   */
  readonly featureType: string;
}
