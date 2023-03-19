"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { setSearch } from "@/store/searchSlice";
import PokemonTable from "./PokemonTable";
import { pokemonApi } from "@/store/pokemonApi";
import { Pokemon } from "@/types";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const SearchInput = () => {
    const dispatch = useAppDispatch();
    const search = useAppSelector((state) => state.search.search);
    const startUpPokemon = useAppSelector(
        (state) => state.search.startupPokemon
    );
    const data = useAppSelector(
        (state) =>
            state.pokemonApi.queries[`search("${search}")`]?.data as Pokemon[]
    );
    console.log("🚀 ~ file: SearchInput.tsx:24 ~ SearchInput ~ data:", data);

    useEffect(() => {
        dispatch(pokemonApi.endpoints.search.initiate(search));
    }, [dispatch, search]);

    return (
        <div>
            <input
                type='text'
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
            />
            <PokemonTable
                pokemons={search.length ? data ?? [] : startUpPokemon}
            />
        </div>
    );
};
