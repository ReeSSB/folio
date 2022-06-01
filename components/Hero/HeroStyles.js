import styled from "styled-components";

export const LeftSection = styled.div`
	width: 100%;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
`;
export const Span1 = styled.span`
	padding: 0px;
	margin: 0px;
	font-size: 37px;
	line-height: 56px;
	font-weight: 600;
	color: #3ccf91;
	font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Open Sans", Helvetica, Arial,
		sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;
export const Span2 = styled.span`
	display: flex;
	font-size: 12.5vh;
	font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Open Sans", Helvetica, Arial,
		sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	padding: 0px;
	margin: 0px;
	color: #ffffff;
	line-height: 144px;
	width: max-content;
	max-width: 100%;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		display: flex;
		flex-direction: column;
		font-size: 9vh;
		line-height: 90px;

		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;
		font-size: 9vh;
		line-height: 90px;

		margin: 0 auto;
	}
`;
export const Span3 = styled.span`
	font-style: normal;
	margin-left: 0px;
	font-size: 20px;
	line-height: 37px;
	font-weight: 550;
	color: #8f9094;
	color: gold;
	color: #3ccf91;

	letter-spacing: 0.6px;

	font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Open Sans", Helvetica, Arial,
		sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		display: flex;
		flex-direction: column;
		font-size: 2vh;
		line-height: 21px;

		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;
		font-size: 2.1vh;
		line-height: 21px;

		margin: 0 auto;
	}
`;
