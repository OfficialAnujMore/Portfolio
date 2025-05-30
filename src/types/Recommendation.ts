export interface Recommendation {
  id: string;
  recommenderName: string;
  recommenderTitle: string;
  recommenderCompany: string;
  recommenderImage: string;
  relationship: string;
  recommendationText: string;
  date: string;
  linkedinProfileUrl?: string;
} 