import styled, { ThemeConsumer } from "styled-components";

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  margin-top: -5.5rem;
  background: ${({ theme }) => theme.colors["base-profile"]};
  box-shadow: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
`;

export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`;
