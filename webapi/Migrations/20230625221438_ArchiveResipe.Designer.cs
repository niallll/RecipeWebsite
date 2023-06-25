﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using RankingApp.DbContexts;

#nullable disable

namespace RankingApp.Migrations
{
    [DbContext(typeof(RecipeDbContext))]
    [Migration("20230625221438_ArchiveResipe")]
    partial class ArchiveResipe
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("RankingApp.Entities.Ingredient", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("character varying(50)");

                    b.Property<int>("RecipeId")
                        .HasColumnType("integer");

                    b.Property<int>("StepNumber")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("RecipeId");

                    b.ToTable("Ingredients");
                });

            modelBuilder.Entity("RankingApp.Entities.Instruction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("InstructionText")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("character varying(50)");

                    b.Property<int>("RecipeId")
                        .HasColumnType("integer");

                    b.Property<int>("StepNumber")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("RecipeId");

                    b.ToTable("Instructions");
                });

            modelBuilder.Entity("RankingApp.Entities.Recipe", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("Calories")
                        .HasColumnType("integer");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<int>("Fat")
                        .HasColumnType("integer");

                    b.Property<int>("ImageId")
                        .HasColumnType("integer");

                    b.Property<string>("ImageName")
                        .HasColumnType("text");

                    b.Property<bool>("IsArchived")
                        .HasColumnType("boolean");

                    b.Property<int>("Time")
                        .HasColumnType("integer");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("character varying(50)");

                    b.HasKey("Id");

                    b.ToTable("Recipes");
                });

            modelBuilder.Entity("RankingApp.Entities.Ingredient", b =>
                {
                    b.HasOne("RankingApp.Entities.Recipe", "Recipe")
                        .WithMany("Ingredients")
                        .HasForeignKey("RecipeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Recipe");
                });

            modelBuilder.Entity("RankingApp.Entities.Instruction", b =>
                {
                    b.HasOne("RankingApp.Entities.Recipe", "Recipe")
                        .WithMany("Instructions")
                        .HasForeignKey("RecipeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Recipe");
                });

            modelBuilder.Entity("RankingApp.Entities.Recipe", b =>
                {
                    b.Navigation("Ingredients");

                    b.Navigation("Instructions");
                });
#pragma warning restore 612, 618
        }
    }
}